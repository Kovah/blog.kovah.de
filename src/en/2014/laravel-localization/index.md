---
author: Kevin Woblick
date: 2014-06-24 08:42:50+00:00
description: Need to change the application language used by Laravel based on the subdomain? Here's how to achieve it with some simple lines of code.
draft: false
title: 'Laravel 4: Localization based on the subdomain'
type: post
url: /en/laravel-localization-based-subdomain/
hascode: true
category: tutorial
tags:
- Laravel
- localization
- PHP
---

{{< alert type="warning" >}}
Looking for a solution for your Laravel 5 application? Take a look at [this post]({{< relref "/2015/laravel-localization" >}}).
{{</ alert >}}

For a new project I needed a solution to provide subdomain-based localization. Because I wanted to use Laravel for the project I started searching and found a lot of articles and questions about localization and subdomains. But the final solution is pretty simple and - maybe the most important thing - doesn't affect your routing. But let's start.
(Don't want to read? You can find the whole code at the end.)
## What we need: Localization based on the subdomain

Let's say we have the domain cars.com and don't want to affect the URL behind the domain. But we want to provide the website in different languages, for the first time we take English and German. The best solution is to take `cars.com` for the English users and `de.cars.com` for the German users.

In our app running with Laravel we have set the locale to `en` in the configuration (`config/app.php`). We don't need to change anything here as we handle the languages elsewhere. If the user visits our website English is used as standard.


## How to change the language based on the subdomain

Well this is pretty simple. We don't need any route filters or something like this. We only need to edit our `filters.php` file. This is the part we need:

```php
App::before(function($request)
{
 //
});
```

First we need to get the subdomain from the url so we can work with her. This is done by getting the `HTTP_HOST` from the `$request` variable that is provided by the function. Alter the code so it looks like this:

```php
App::before(function($request)
{
  $url = explode('.', $request->server('HTTP_HOST'));
  $langcode = $url[0];
});
```

Next we have to determine if the subdomain we got is a language code. For this we need an array that includes all languages that are available. We check if the subdomain is in the array. If yes we set the locale configuration. Place the following code after the code we added first:


```php
$languages = ['en','de'];
if ( in_array($langcode, $languages) ){
  App::setLocale($langcode);
}
```

If the user visits `de.cars.com` the app checks the subdomain against the array and sets the locale to `de`.

Please notice that you have to update your language strings. All strings from `app/lang/en/*` have to be copied and translated to the matching language code. Following the example with the german version it would be `de` with the translations in `app/lang/de/*`.
You can find more information about translations in the official [Laravel Docs](http://laravel.com/docs/localization).



## The results

The user visits `cars.com`:

{{< image img="141254.jpg" alt="English" >}}

The user visits `de.cars.com`:

{{< image img="141250.jpg" alt="German" >}}


## Summary: The whole codesnippet for your Laravel app

**filters.php**
```php
App::before(function($request)
{
  $url = explode('.', $request->server('HTTP_HOST'));
  $langcode = $url[0];

  $languages = ['en','de'];

  if ( in_array($langcode, $languages) ){
    App::setLocale($langcode);
  }
});
```
