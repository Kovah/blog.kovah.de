---
title: "Laravel: Why eager-loaded relations weren't working in unit tests"
description: I just had an issue with eager-loaded relations not working in unit tests. Here's how I solved the issue.

author: Kevin Woblick
date: 2020-02-04T12:24:08+01:00
draft: false
hascode: true

category: article
tags:
- Laravel
- PHP
---

First, here's an abstracted example of the real issue from my [LinkAce](https://github.com/Kovah/LinkAce) project.

We have the standard Laravel user model and a settings model. Both are connected as a user can have many
settings.

```php
class User {
    public function settings(): HasMany
    {
        return $this->hasMany(Setting::class, 'user_id', 'id');
    }
}
```

To make handling settings in the templates easier, we have a small helper method which uses eager loading.
Eager loading is a neat Laravel feature which runs one single database call and fetches all related models,
instead of querying the database for each single relation. If you want to learn more about this feature I
recommend reading the small section in the [documentation](https://laravel.com/docs/6.x/eloquent-relationships#eager-loading).

```php
function usersettings($key = null) {
    if ($key !== null) {
        return auth()->user()->settings
            ->where('key', $key)->get();
    }

    return auth()->user()->settings->get();
}
```

## What's the issue with eager loading in unit tests?

While this works perfectly in the browser, eager loading does not work correctly while being used in
unit tests, in my case run by PHPunit. The problem was, that whenever I wanted to access the settings
trough the helper, the settings were simply empty, despite the fact that there were entries in the 
database and I could get the settings without using eager loading.

```php
$setting = usersettings($key);
dd($settings);

>> Illuminate\Support\Collection {#3378
   all: []
 }
```

### Request cycles are important

In the PHPunit test, I authorized the user and then created some settings related to the user. Here's the
key issue: Laravel queries eager-loaded relations once in the complete request cycle. This means that
wherever this helper is used before you get your actual results, Laravel will already have checked the 
database for entries and saves them for the current user.  
In my case, the database was empty because the settings were added at the very end of the request. While
using the browser, those entries are already there, stored in the database in a previous request.

## Solving the issue with the `load()` method

So, we have the issue now that the eager-loaded relation is simply empty, but we would like to get them
when something has changed. Of course, Laravel offers some help here with the `load()` method. The method 
is also called [lazy eager loading](https://laravel.com/docs/6.x/eloquent-relationships#lazy-eager-loading)
and fetches the corresponding relations when it's triggered.

The helper method can simply be changed to use the method if the settings are empty:

```php
function usersettings($key = null) {
    // If the settings are empty, tell the authenticated user to load his settings
    if (auth()->user()->settings->isEmpty()) {
        auth()->user()->load('settings');
    }

    if ($key !== null) {
        return auth()->user()->settings
            ->where('key', $key)->get();
    }

    return auth()->user()->settings->get();
}
```

If run multiple times per requests, only the first call to the helper function will trigger the
database call.
