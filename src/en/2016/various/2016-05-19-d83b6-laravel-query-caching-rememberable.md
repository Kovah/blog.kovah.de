---
author: Kevin Woblick
date: 2016-05-19 11:21:38+00:00
description: Reduce the query count with query caching in Laravel.
draft: false
title: Laravel query caching with Rememberable
type: post
url: /en/d83b6-laravel-query-caching-rememberable/
hascode: true
category: article
tags:
- Caching
- Laravel
- PHP
- Web Development
---

Laravel caching is really awesome and works perfectly. By adding the [watson/rememberable](https://github.com/dwightwatson/rememberable) package I was able to reduce the overall query count from 33 to zero. **Zero**!

```php
// Get a the first user's posts and remember them for a day.
User::first()->remember(1440)->posts()->get();
```
