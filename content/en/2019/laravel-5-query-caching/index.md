---
title: "Laravel 5: Use Query Caching to make your App really fast"
description: There are several methods to make your Laravel app faster by using caching. Today I want to introduce query caching which reduced the number of database calls to almost zero.

url: n7hs3x-laravel-5-use-query-caching-to-make-your-app-really-fast
date: 2019-03-01
draft: false
hascode: true

categories:
- Tutorial
tags:
- Caching
- Laravel
- Performance
- PHP
---

I am currently rebuilding one of my oldest side projects, [the Game Quotes Network](https://game-quotes.com/). As a content-heavy application with a lot of stuff stored in the database it’s not that easy to find the best balance between caching your site and delivering the most up-to-date content to your users. There are several methods to achieve content caching to a) minimize the load on your infrastructure and b) make your app load faster, but today it’s not about the nginx cache or manually store stuff in the Laravel cache and retrieve it once you need it. Today I want to introduce **query caching** which reduced the number of database calls to almost zero.

## Before we start: what is query caching capable of?

So, before query caches are enabled, the frontpage of Game Quotes uses 42 database queries, uses 5.562MB RAM and loads in 389ms.

{{< image img="gq_query_caching_disabled.png" alt="GameQuotes with query caching disabled" >}}

By implementing query caches for most of the used entities I was able to drop the query caches to 4 queries and the load time dropped by almost 50% to 206ms.

{{< image img="gq_query_caching_enabled.png" alt="GameQuotes with query caching enabled" >}}

As you see, you are able to significantly reduce the load on both the app and the database. One major advantage: caches can be **valid until content changes** which further reduces load as the content does not have to be fetched again after the cache becomes invalid. I think that’s really impressive, so how do we achieve this?

## Implementing query caches for Laravel

To be honest, implementing query caching is far from being magic. The major reason for this is the [Rememberable package](https://github.com/dwightwatson/rememberable) maintained by [Dwight Watson](https://github.com/dwightwatson). The package is well maintained, easy to use and already compatible with Laravel 5.8. I will show you how to use it.

First, install the package by simply using

```shell
composer require watson/rememberable
```

After that you have to prepare the model you want to enable query caches for. To do so, modify it like this:

```php
use Watson\Rememberable\Rememberable;

class Quote extends Model
{
    use Rememberable;
    ...
}
```

We now have told the Rememberable package to automatically cache all database queries for this model. Be very careful with this. If you just drop in this line without any further configuration you would have to clear the whole Laravel cache if you want to clear the query cache for your model! To prevent any issues here, we will configure the model now.

### Tagging of Query Caches

The first step is to tell Rememberable to tag the cache for this particular model. Caution: this only works with caching that also support tagging, like Redis or Memcached, [but not the file cache](https://laravel.com/docs/5.7/cache#cache-tags).

```php
class Quote extends Model
{
    use Rememberable;

    public $rememberCacheTag = 'quote_queries';
}
```

This option makes it possible to just delete the query caches for our model, which is important to do if content changes. We could do something like this then:

```php
Cache::tags('quote_queries')->flush();
```

To make things easier you can also use a special method of the Rememberable package so you do not have to remember the cache tag. Call `flushCache()` on your model to clear the query caches for it:

```php
Quote::flushCache();
// or
$quote->flushCache()
```

### Automatically expire Caches

This step is optional as you may only need to invalidate caches when content changes. However, you may be on the safer side if query caches do not last forever. Simply add the following option, the value is the cache lifetime in minutes.

```php
class Quote extends Model
{
    use Rememberable;

    public $rememberCacheTag = 'quote_queries';
    public $rememberFor = 60; // 1 hour
}
```

So, that’s it already. Your app should now cache all queries.

### Be careful with model relations

One big thing that lead to some headaches for me: model relations. If Model A has a relation to Model B it is very likely to experience problems with query caches while working with these relations. To be save, clear the caches for both models if one updates.
