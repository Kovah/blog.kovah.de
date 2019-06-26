---
author: Kovah
date: 2016-02-05 14:11:16+00:00
description: Need a password suggestion generator for your (Codeigniter) app? Look
  no further, you can find two different approaches in this tutorial
draft: false
title: A small password suggestion generator for Codeigniter
type: post
url: /en/a-small-password-suggestion-generator-for-codeigniter/
hascode: true
categories:
- Tutorial
tags:
- Codeigniter
- passwords
- PHP
---

Passwords. Used everywhere, passwords can also be a part of your Codeigniter application. So they are a part of InvoicePlane, that is based on Codeigniter. To provide password suggestions for the installation process I thought about a simple yet secure solution.

## 1. Passphrases

Instead of using passwords like `1Li2_zynZhbK` some people say that passphrases are way more secure. If you just take the time that it takes for a bruteforce attack to crack a password, `shift-bridge-single-valentines` would take hundreds or thousands of years even for a supercomputer where `1Li2_zynZhbK` would take about half or less of the time. But I don't want to discuss about how secure passwords are, I just want to display a suggestion for a strong password. And both `1Li2_zynZhbK` and `shift-bridge-single-valentines` are 1000x secure than `password` or `123456` which will be cracked instantly.

The problem: passphrases use words that are simply linked together. But where to take some real words without embedding a 200.000 words dictionary or using a third-party service? As InvoicePlane is not a small app it uses a lot of language strings which would fit perfectly. So, let's start.

```php
/**
 * Generates a password suggestion based on words from the InvoicePlane language files
 * @return string
 */
function generate_password_suggestion() {
    $CI = & get_instance();
    $lang = $CI->lang->language;
    $lang_keys = array_keys($lang);
    $password_suggestion = '';
    
    for ($i = 0; $i <= 4; $i++) {
        $rand = mt_rand(0, count($lang));
        $lang_string = $lang[$lang_keys[$rand]];
        
        $string_start = strpos($lang_string, ' ');
        $string_end = strpos($lang_string, ' ', $string_start + 1);
        
        if (empty($string_start) && empty($string_end)) {
            $string = $lang_string;
        } else {
            if (empty($string_end)) {
                $string_end = strlen($lang_string);
            }
            $string = substr($lang_string, $string_start,  $string_end - $string_start);
        }

        $string = ucfirst($string);
        
        if($i === 0) {
            $password_suggestion .= $string;
        } else {
            $password_suggestion .= '-' . $string;
        }
    }
    
    return strip_tags(preg_replace('/[^A-Za-z\-]/', '', $password_suggestion));
}
```

### Explanation of the code

  * What do we need to build a password that consists of words? First we need the language strings as an array. The first three lines of the function load the array keys to access the language strings with an index.
  * The loop is used to pick 5 words from the language strings. Nothing more.
  * To pick a random word out of the strings we have to get a random index so we can access the array.
  * After that we have to find words by searching for a space character and the subsequent space by using `strpos()`.
  * If there were no spaces found in the string we just take it as it is and pretend that it's a word. If spaces were found we have to extract the word. As `strpos()` returns the numeric location of the space we can extract the word with the help of `substr()` which makes it possible to cut a substring out of a string using a start and an end.
  * After that we convert the first string to uppercase and update the string with the new word.
  * The last line features both `strip_tags()` and `preg_replace()` which are used to delete all special characters and HTML tags.

The output would look like this: `Invoice-Email-Recurring-Client-Details`

## 2. Passwords

A much simpler approach is to create a simple random string out of a set of characters. Way easier but less people will use exactly this password instead of the passphrase.

```php
/**
 * Generates a random password
 * @return string
 */
function generate_password_suggestion()
{
    $chars = "abcdefghijklmnpqrstuvwxyzABCDEFGIHJKLMNPQRSTUVWXYZ123456789-_";
    $suggestion = substr(str_shuffle($chars), 0, 12);
    return $suggestion;
}
```

Much easier to understand and much shorter, this function uses a charset, shuffles the set and extracts a 12 characters long string from it. I removed o,O and 0 to prevent confusion with theses characters as they look like the same with many fonts.
This script can also be used in non-Codeigniter applications. It outputs something like the mentioned above: `1Li2_zynZhbK`
