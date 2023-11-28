---
title: The Odyssey of a PostgreSQL restore
description: I just wanted to restore the database from a backup I created from my production database...

author: Kevin Woblick
date: 2023-11-27T17:18:24+01:00
draft: false
hascode: true

categories:
  - article
tags:
  - postgresql
  - databases
---

Maybe I'm too naive, but I thought that clicking "Backup" and then clicking "Restore" in [Tableplus](https://tableplus.com/) would be enough to move the content of a production database to my local dev environment. The schema is exactly the same, just the data is different and I wanted to have some production data locally to play and test with. However, I've spent almost an hour trying to copy the database data. This is the odyssey of restoring a PostgreSQL database from a backup.

Tableplus, my database management GUI of choice, is a powerful tool and I love it. It comes with backup and restore functionality for all major database systems. When creating the backup of a PostgreSQL database, there is only one option present: `--format=custom`. According to the [PostgreSQL documentation](https://www.postgresql.org/docs/14/app-pgdump.html), this means Postgres is exporting the data in a proprietary archive format. You can open the file, but it's not human-readable.  
The dump of the production database with the standard options is done in a couple of seconds.

The dialog to restore a database looks exactly the same and has `--single-transation` as the default option. However, after trying to restore the dump created a second before, I get the following error:

```
restore_pg_14.0: error: 
could not execute query: 
ERROR:  relation "health_metrics" already exists
```

Uh. Okay. I guess that Postgres does not drop the database schema before doing a restore. A quick look into the documentation reveals that the archive format includes _everything_ by default.

Therefore, I tried using the `--data-only` option. According to the docs, it only dumps the data but not the schema. There should be no duplicates, right? After running the backup with said option, I get the next error:

```
restore_pg_14.0: error: could not execute query: 
ERROR:  permission denied for table health_metrics
```

Oh. I first thought I had accidentally changed database permissions or passwords, but after reading [this Stack Overflow thread](https://stackoverflow.com/questions/61096882/postgres-can-only-superuser-and-owner-take-backup-dump) it sounded like the user must be the same for dumping and restoring a database? Another approach could be to dump regular SQL and restore it.  
I dumped the database content and the size of the dump increased from 12MB to 74MB of raw SQL. While trying to restore the SQL dump, I get another error.

```
ERROR:  syntax error at or near "1"
LINE 677: 1 active_energy 2022-08-24 06:05:00 0.88700800000000013
```

Looks like that's not going to work. I guess the dump is just too large.

I am frustrated. Why can't this _just work_? Why does Postgres need to take care of permissions when dumping data and restoring it? I'm running out of patience, so I switch to the postgres superuser that must have access to everything. I don't like it, but it seems the only way.  
Again, I run the restore of the backup I created with the `--data-only` option:

```
restore_pg_14.0: error: COPY failed for table "health_metrics": 
ERROR:  duplicate key value violates unique constraint "health_metrics_pkey"
DETAIL:  Key (user_id, name, date)=(1, active_energy, 2022-08-24 06:05:00) already exists.
```

Okay. Sure. There is data present in the database, and pg_restore just tries to push new data into it. The [pg_restore docs](https://www.postgresql.org/docs/14/app-pgrestore.html) list a `--clean` option which drops all existing data. I get the same error as before. Maybe pg_restore can't drop the data if it does not know about the tables? Let's try the `--clean` option while doing the export.

```
dump_pg_14.0: error: options -c/--clean and -a/--data-only cannot be used together
```

One last try. The docs about the archive format state that it contains all the data and "then pg_restore can be used to examine the archive and/or select which parts of the database are to be restored". Maybe try the archive format and tell **pg_restore** to clean up before doing the restore? I ran the restore of a regular archive backup with `--clean` and... FINALLY!  
The database restore went through and I have the production data in my local database - after almost 40 minutes and a lot of headache.

{{< alert type="info" >}}
**TLDR:** Export the database into the archive format (`--format=custom`) and then import it into the other database with the `--clean` flag. Make sure, that the importing user has sufficient rights, like the `postgres` user.
{{</ alert >}}

However, I still would like to know how to restore a PostgreSQL database dump without having to take care of user permissions...
