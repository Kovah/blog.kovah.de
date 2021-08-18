---
author: Kevin Woblick
date: 2014-05-09 21:16:50+00:00
description: Follow this tutorial powered by Kovah.me to install the Kandan chat system
  on your Ubuntu 12.04 server running with Apache / Plesk.
draft: false
title: Install Kandan on Ubuntu 12.04 Server with Apache / Plesk
type: post
url: /en/install-kandan-ubuntu-12-04-server-apache-plesk/
hascode: true
category: tutorial
tags:
- Apache
- chat
- Kandan
- PostgreSQL
- Ubuntu
---

No, Kandan is not a Pokèmon. [Kandan](https://github.com/kandanapp/kandan) is an open source alternative to HipChat (by Atlassian) based on Ruby on Rails that offers you a private chat system. This tutorial will show you how to install Kandan on an Ubuntu 12.04 Server with Apache running. If you are running Plesk you will find additional instructions on how to set up Kandan with Plesk.

## Requirements for Kandan on Ubuntu 12.04

The following things are required to run Kandan. There are links to installation tutorials for each required part.

* [Apache, PHP](http://goo.gl/HYT5V)
* [Ruby on Rails](http://goo.gl/YSvmp)
* [PostgeSQL](http://goo.gl/sCnbaM)
* [Git](http://goo.gl/8Jo1G) (optional)

## Install Kandan on your Ubuntu server

Now we will install Kandan with the standard settings and try if we can connect to the app. Follow the instructions:

* First we need to download the app files to our server. You can choose between using Git or the built-in wget:`cd /opt/``git clone https://github.com/kandanapp/kandan.git`

or

```bash
cd /opt/
wget https://github.com/kandanapp/kandan/archive/master.zip
unzip master.zip
mv master kandan
```
    
    <code class="language-bash"></code>
* Perfect. You have the Kandan app files now. Let's take a look into the directory:`cd kandan`
* Now we need some other required stuff to run Kandan without any problems and prepare to install Kandan.`sudo apt-get install ruby1.9.1-dev ruby-bundler libxslt-dev libxml2-dev libpq-dev libsqlite3-dev``bundle install`
* If the bundler ran without any errors you can go ahead. If there are errors, bundler should have told you how to solve it. If you are stuck, leave a comment. But now we have to configure your database for Kandan.`su – postgres``createdb kandan_production`
* We have created the database but we still need a user with password:
    `psql`  
    `CREATE USER kandan WITH PASSWORD 'yourpasswordhere';`  
    `\q`
* Woot! We have a database for Kandan. Let's tell Kandan about it.

```bash
cd /opt/kandan/config
nano database.yml
```

You should see some predefined options for develompent and tests. But we want a production environment. Paste this with your password above the develompent section:

```
production:
adapter: postgresql
host: localhost
database: kandan_production
pool: 5
timeout: 5000
# You might need these depending on your Postgres auth setup.
username: kandan
password: yourpasswordhere
```

You can save and exit with `ctrl + x` then `y` and then press `enter`.
* You are ready to install and run the app now. Do it!


```bash
bundle exec rake db:create db:migrate kandan:bootstrap
bundle exec thin start
```


You should see how Kandan starts. Leave the terminal now and user the following address to access Kandan:

`http://your.ip:3000`


If the Login screen shows up you are ready to configure Apache / Plesk so you can access Kandan from http://chat.youdomain.com/

If you want to spend some time with Kandan you can access the app with the username _Admin_ and the password _kandanappadmin_

If you are ready to go please shut down Kandan with _ctrl + c_

## Configure Apache / Plesk to run with Kandan

It is very easy to setup Apache to run with Kandan. Just paste this to the virtualhosts file of a subdomain / domain.

```
ProxyPreserveHost On
ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/
```

If you are using Plesk (> v11) you can add these lines under the following menu: _Home panel_ > _yourdomain.com_ > _Websites & Domains_ > Select your subdomain here and open the settings panel below it > select _Webserver-Settings_ and paste the lines in the textarea for additional HTTP instructions



## Setup Kandan as a service so it will start after reboot



Maybe you noticed that Kandan started in your terminal session and wanted to stay there. If you close your terminal the app shuts down. If you want to load the app on reboot of your Ubuntu server you can easily follow the following instructions:

1. `nano /etc/init.d/kandan` and paste the following lines into the editor.
  ```bash
  #! /bin/sh
  case "$1" in
  start)
  cd /opt/kandan && bundle exec thin start -d
  ;;
  stop)
  cd /opt/kandan && bundle exec thin stop
  ;;
  restart)
  cd /opt/kandan && bundle exec thin restart -d
  ;;
  esac
  exit 0
  ```
  If you are ready you can save and exit with `ctrl + x` then `y` and then press `enter`.
2. Now we can add the service to the reboot so the app starts when the machine is booting up.`sudo update-rc.d kandan defaults`


If you have any suggestions / problems please leave a comment. If you have problems with the app itself please add write an issue report at the [Kandan Github repository](https://github.com/kandanapp/kandan/issues).
