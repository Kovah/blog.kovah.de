---
author: Kevin Woblick
date: 2015-07-24 05:57:59+00:00
description: You want to set the locale of your Laravel 5 application based on the visited subdomain? Here is the full tutorial.
draft: false
title: 'Laravel 5: Localization based on the subdomain'
type: post
url: /en/laravel-5-localization-based-on-the-subdomain/
hascode: true
category: tutorial
tags:
- Laravel
- localization
- subdomain
---

You may came from this post where I described how to change the language of a Laravel application based on the visited subdomain. The old post covers Laravel 4 but does not apply to Laravel 5 so let's get started again.

## What we need: Localization based on the subdomain

Let's say we have the domain `developers.io` and don't want to display the language behind the domain so it looks like `developers.io/de/`. The best solution is to use sub domains to provide a language selector for the user. This means the primary language is available at `developers.io` while all other languages are available from a sub domain like `de.developers.io`. But how to achieve this?

## How to change the language based on the subdomain

Well this is pretty simple. We don't need any route filters or something like this. We need a Middleware controller. Before we start a short explanation. Middleware controllers are the successor of the filters.php file. These are basically the same but they are split up into multiple files and handled by the `App/Http/Kernel.php` file. You will find a code block like this in the kernel file:

```php
/**
* The application's global HTTP middleware stack.
*
* @var array
*/
protected $middleware = [
IlluminateFoundationHttpMiddlewareCheckForMaintenanceMode::class,
AppHttpMiddlewareEncryptCookies::class,
IlluminateCookieMiddlewareAddQueuedCookiesToResponse::class,
IlluminateSessionMiddlewareStartSession::class,
IlluminateViewMiddlewareShareErrorsFromSession::class,
AppHttpMiddlewareVerifyCsrfToken::class,
];
```

These are the middleware controllers that are loaded on every request. We need to jump in here.
So, let us create a middleware controller first. Just run the following command in your Laravel 5 directory:

```bash
php artisan make:middleware LangMiddleware
```

The file /App/Http/Middleware/LangMiddleware should have been created. We have to integrate our middleware controller into the application by simply adding it to the array that was mentioned above so it looks like this:


```php
/**
* The application's global HTTP middleware stack.
*
* @var array
*/
protected $middleware = [
IlluminateFoundationHttpMiddlewareCheckForMaintenanceMode::class,
AppHttpMiddlewareEncryptCookies::class,
IlluminateCookieMiddlewareAddQueuedCookiesToResponse::class,
IlluminateSessionMiddlewareStartSession::class,
IlluminateViewMiddlewareShareErrorsFromSession::class,
AppHttpMiddlewareVerifyCsrfToken::class,
AppHttpMiddlewareLangMiddleware::class
];
```

### Detect the current subdomain and change the language

Out middleware controller is ready to take part in the Laravel 5 app. But it does nothing at the moment.
Now we have to detect the subdomain and then check if the subdomain is available as a language.

To get the URL and it's subdomain we access the middleware's `$request` variable that is directly available. We can parse the URL we get with `parse_url()` and extract the subdomain using the `explode()` function.

```php
$url_array = explode('.', parse_url($request->url(), PHP_URL_HOST));
$subdomain = $url_array[0];
```

Now we have the subdomain saved in the $subdomain variable. This variable could also contain the base URL developers from developers.io if the user didn't entered any subdomain. But this is not important as the Laravel 5 app has a default language set which will be used then.

We can check if the subdomain is a locale and available as a language by simply checking for it's existence in a language array.

```php
$languages = ['en','de'];
if ( in_array($langcode, $languages) ){
    App::setLocale($langcode);
}
```

If the user visits `de.developers.io` the app checks the subdomain against the array and sets the locale to `de`.
Please notice that you have to update your language strings. All strings from `resources/lang/en/*` have to be copied and translated to the matching language code. Following the example with the german version it would be _de_ with the translations in `resources/lang/de/*`.
You can find more information about localization in the official [Laravel Docs](http://laravel.com/docs/5.1/localization).

### What the Laravel middleware controller should look like

This is the final middleware controller that is capable of localizing the application based on the subdomain:

```php
<?php
namespace AppHttpMiddleware;

use Closure;
use IlluminateSupportFacadesApp;

class LangMiddleware
{
    public function handle($request, Closure $next)
    {
        $url_array = explode('.', parse_url($request->url(), PHP_URL_HOST));
        $subdomain = $url_array[0];

        $languages = ['en', 'de'];

        if (in_array($subdomain, $languages)) {
            App::setLocale($subdomain);
        }

        return $next($request);
    }
}
```

## The results

The user visits _developers.io_:

{{< image img="0bbd02b0.jpg" alt="english" >}}

The user visits _de.developers.io_:

{{< image img="044dcb92.jpg" alt="german" >}}
