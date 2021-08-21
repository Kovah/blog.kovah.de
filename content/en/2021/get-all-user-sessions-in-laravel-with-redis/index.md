---
title: How to get all user sessions in Laravel from Redis
description: "If you want to inspect user session data, here's how to get all that data from Redis."

author: Kevin Woblick
date: 2021-08-21T18:19:50+02:00
draft: false
hascode: true

categories:
- Tutorial
tags:
- Laravel
- Redis
- PHP
---

I wanted to access all session data for all users in Laravel while using the Redis cache driver. If you have all session data, you can inspect the data associated to that session, do some calculations based on averages across all session, or whatever else you want to do.
Unfortunately, Laravel does not offer any way to just get **all** user sessions at once. I searched the web for solutions, only to find out that users recommend switching to the database to store user sessions. Obviously, not a solution for any production system, and really not a good solution if you consider the mediocre performance of any database compared to Redis.

## How to access all session data in Laravel

So, here's how to access **all** user sessions stored in Redis. I assume that you use Laravel 8 with PHP 8. You may use this with older PHP versions if you replace the function shorthand with a full function.

```php
use \Illuminate\Support\Facades\Redis;

$keys = array_map(fn($key) => str_replace('laravel_database_', '', $key), Redis::keys('*'));
$data = array_map(fn($data) => unserialize(unserialize($data)), Redis::mget($keys));
```

If you changed your `APP_NAME`, replace `laravel` in the `laravel_database_` string with your value.  
Example: If your application name is `MyApp` you should use `myapp_database_`.

It's really just two lines of code, which should get you something like this:

```
array:2 [▼
  0 => array:3 [▼
    "_token" => "1jMe1...oWSJe"
    "_previous" => array:1 [▶]
    "_flash" => array:2 [▶]
  ]
  1 => array:9 [▼
    "_token" => "z29O...W3lT"
    "url" => []
    "_previous" => array:1 [▶]
    "_flash" => array:2 [▶]
    "login" => []
    "login_web_59ba...989d" => 1
    "password_hash_web" => "$2y$10$6H...bnS"
    "password_hash_sanctum" => "$2y$10$6H...bnS"
  ]
]
```


## Explanation of the Code

Let us walk through the two lines to get a better understanding of the code.

Redis has no feature to get all data at once. First, we need to get all keys from Redis. Laravel automatically builds the Redis keys based the application name and other parts. To work with the "real keys" later, we have to remove this Laravel-internal string from the key. We do this in the str_replace part, where we remove `laravel_database_` from all returned keys. The `$keys` array then holds the keys for all user sessions.

```php
$keys = array_map(fn($key) => str_replace('laravel_database_', '', $key), Redis::keys('laravel_database_*'));
```

The next step is to get the data for all those keys. Thankfully, Redis has the `MGET` command, which lets you get the data for an array of keys. For whatever reason, the data returned is serialized twice. I guess it's one serialization for storing data in Redis and one for actually serializing the session data. Whatever the reason might be, we get the data via `Redis::mget($keys)` and then loop through all returned datasets and unserialize the string we got from Redis twice.

```php
$data = array_map(fn($data) => unserialize(unserialize($data)), Redis::mget($keys));
```

The result is an array stored in `$data` that holds all user sessions as arrays with their corresponding data.
