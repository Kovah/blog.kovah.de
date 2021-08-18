---
author: Kevin Woblick
date: 2015-11-06 15:50:08+00:00
description: "An article about my new blog and what it's built on: Wordpress and a lot of work."
draft: false
title: Kovah.me - Under the Hood
type: post
url: /en/kovah-me-under-the-hood/
hscode: true
category: article
tags:
- Blog
- Wordpress
---

It's been about 7 weeks since I started working on the new version of my blog. Or better: a new version that merges my two blogs. The first one, my original blog from blog.kovah.de that was started about 8 years ago and this blog: kovah.me.
Now I want to show you what I used to build the new base for the blog system.

## Multi language? Multi blog!

Sadly, there is no reliable translation engine I could use. I worked with WPML at work and it's both powerful and horrible if you want to use more than just a standard theme. A lot of customizations break the system. Other translation systems didn't worked with the way I wanted to localize the blog. That's why there are two blogs running in the two sub directories, but both run with the same theme. The problem is that you can't just simply run a blog that supports both the sub directories and other customizations I wanted to add.

## The theme of Kovah.me

The theme is based on on [underscores](http://underscores.me/) and supports multiple languages und is completely translatable. I made a lot of customizations to be able to style every aspect of the blog including every part of the post content. I used Sass together with NPM, Bower and Grunt to develop the theme.
As the theme is pretty clean and minimalist I will release it as open source once I developed a new theme for the blog in a few years. Open source, huh!
Another pretty awesome technology I used for the first time is the new HTML5 picture element. I can pass multiple source urls with an image and the browser is able to select the most appropriate image for the current browser size. An example:

```html
<picture>
      <!--[if IE 9]><video style="display: none;"><![endif]-->
      <source srcset="https://blog.kovah.de/en/wp-content/uploads/2015/07/3097846143-544x300.jpeg" media="(max-width: 543px)">
      <source srcset="https://blog.kovah.de/en/wp-content/uploads/2015/07/3097846143-992x380.jpeg" media="(min-width: 544px) and (max-width: 991px)">
      <source srcset="https://blog.kovah.de/en/wp-content/uploads/2015/07/3097846143-1200x420.jpeg" media="(min-width: 992px) and (max-width: 1199px)">
      <source srcset="https://blog.kovah.de/en/wp-content/uploads/2015/07/3097846143-1410x480.jpeg" media="(min-width: 1200px)">
      <img srcset="https://blog.kovah.de/en/wp-content/uploads/2015/07/3097846143-1200x420.jpeg" alt="">
      <!--[if IE 9]></video><![endif]-->
    </picture>
```

Wordpress already cropped the source image into different sizes and they are just passed with the element. You could directly use this code but make sure you included the [Picturefill](http://scottjehl.github.io/picturefill/) library to support the picture element in all browsers.

## Used plugins for the blog

The following plugins are used for this blog:

* [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) for translation linking
* [Akismet](https://wordpress.org/plugins/akismet/) for Spam bashing
* [Manual Image Crop](https://wordpress.org/plugins/manual-image-crop/) for.. well.. cropping images. Very useful for features images
* [Plugin Vulnerabilities](https://wordpress.org/plugins/plugin-vulnerabilities/) for  plugin security
* [TinyMCE Advanced](https://wordpress.org/plugins/tinymce-advanced/) for more advanced editing
* [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) for page speed and performance tuning
* [WP-PageNavi](https://wordpress.org/plugins/wp-pagenavi/) for a more advanced page navigation
* [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/). SEO. Advanced SEO. Very useful.

And some small plugins that are not that important for the blog to work.
