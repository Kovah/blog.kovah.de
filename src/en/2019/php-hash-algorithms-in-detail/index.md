---
title: PHP Hash Algorithms in Detail
description: "Aren't you curious about all the different algorithms available for PHP's hash() function? Search no further, I have you covered."

author: Kevin Woblick
date: 2019-10-24T17:31:10+02:00
draft: false
hascode: true

category: article
tags:
- PHP
- Algorithms
- hashes
---

The PHP [`hash()`](https://www.php.net/manual/en/function.hash.php) function is one of these functions you don't use that often, but that can come in quite handy if you want to generate something like unique IDs, shorten content or whatever practical use you can derive from the possibility of hashing some input.

Fo those who don't know the function already, it is available since PHP 5.1 and generates a [hash](https://en.wikipedia.org/wiki/Hash_function) based on the input you feed the function with. The output is always the same for the same input if you use the same algorithm.

```php
echo hash('md5', 'Hello world');
// 3e25960a79dbc69b674cd4ec67a72c62

echo hash('crc32', 'Hello world');
// 75883905

echo hash('sha256', 'Hello world', true);
// d���h�5g����f�Gr2SJ��<
```

As you see, the hash changes based on the algorithm (first argument) you use. A third parameter changes the output of the function from regular strings to binary, as you see in example 3.


## Getting details about all available PHP hash algorithms

Since using PHP, I was always looking up the hash() function by opening the corresponding PHP manual article, mostly for searching the shortest hash possible or the fastest one. Some users already did some work on the outputs of this function and generated outputs which are really helpful. Unfortunately, most of these posts area kinda outdated.  
So I created a new, [up-to-date dataset of all PHP hashes](https://github.com/Kovah/php-hashes) which contains two lists for all currently supported PHP versions, being 7.1 through 7.3:

* all algorithms ordered by name
* all algorithms ordered by the time it takes to complete.

The data is created with a standardized script which generates a 1024 characters long string and outputs hashes with all available algorithms for it.

I think those lists are quite helpful if you are searching for either a very short hash or maybe a hash that is very computed very fast.


## A first look at the results

For sure, the generation of hashes really depends on various factors such as the clock speed of your machine, string length and if you output the raw binary data or actual usable strings.

From a first look, for a string with a length of 1024 characters, the fastest algorithms with string output are:

* `tiger192,4` at `0.006914 ms` (48 bytes length)
* `fnv1a64` at `0.006914 ms` (16 bytes length)
* `crc32b` at `0.007868 ms` (8 bytes length)

Here are the results for the most well-known algorithms, in comparison with the fastest one from list 1:

* `sha256` at `0.010014 ms` (64 bytes length), `+ 0.0031 ms`
* `sha512` at `0.010014 ms` (128 bytes length), `+ 0.0031 ms`
* `md5` at `0.010014 ms` (32 bytes length), `+ 0.004053 ms`

In fact, the execution times of most algorithms are very close to each other, which may be result of the high clock speed of the used processor. If you look at the timings, the differences are all together not really relevant for such short strings.


## The next steps: Security and Big Data

In the following weeks I am planning to update the script to generate more data and publish them as .csv files. I currently think of the execution of all algorithms for different string sizes. This will give me the opportunity to take a deeper look at the differences and gain more statistical insights.

Also, which is quite important, I will search for how secure all algorithms are. Some algorithms like `md5` are already "broken", meaning they should not be used for sensitive data anymore.
