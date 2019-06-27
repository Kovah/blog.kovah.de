---
author: Kovah
date: 2016-05-10 09:29:44+00:00
description: Examples for converting arrays into objects in PHP
draft: false
title: Convert arrays to objects in various ways
type: post
url: /en/394a1-convert-arrays-objects-various-ways/
hascode: true
categories:
- Article
tags:
- PHP
- Programming
- Web Development
---

TIL: You can convert arrays to objects in various ways:

```php
$obj = (object) $array;
```

```php
$obj = json_decode(json_encode($array));
```

```php
$object = new stdClass();
foreach ($array as $key => $value) {
    $object->$key = $value;
}
```
