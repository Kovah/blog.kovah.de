---
title: How to use Vite assets in Laravel Backpack
description: You recently switched from Laravel mit to Vite and want to use these assets in Laravel Backpack? You'll find help here.

author: Kevin Woblick
date: 2022-07-13T17:45:59+02:00
draft: false
hascode: true

categories:
- Tutorial
tags:
- laravel
- php
- laravel-backpack
- vite
---

I recently started using Backpack for my [Game-Quotes.com](https://game-quotes.com/en) project. It's a great admin panel with easy customization. Backpack also allows you to add custom styles and scripts to the admin panel inside the config file:

```php
// config/backpack/base.php
'mix_styles' => [ // file_path => manifest_directory_path
     'assets/css/custom-admin.css' => '',
],
```

## Switching from Laravel Mix to Vite

Starting with Laravel 9.19, it is possible to use [Vite as your asset bundler](https://laravel.com/docs/9.x/vite) without much configuration. The migration from Laravel Mix is quite easy, as long as you don't have a too complicated setup. In my case, I just have one stylesheet, some scripts and one special stylesheet for the admin area.

However, after completing the migration and cleaning up the old Mix files, like the `mix-manifest.json` file, I got an error while opening the Backpack admin panel:

```
Mix manifest not found at: /app/public/build/mix-manifest.json
```

Huh. Backpack tries to load the `mix-manifest.json` file to inject the correct files into the admin panel. As we don't use Mix anymore, we have to find another way.

## Adding assets built with Vite to Laravel Backpack

Up to this point, Backpack does not natively support any assets built with Vite, as is does not use the same manifest structure as Laravel Mix did, so just replacing file names won't do it. Thankfully, Laravel has a built-in system to overwrite views of third-party packages: the `resources/views/vendor` folder.

After installing Backpack, your project should already have a `resources/views/vendor/backpack` folder containing some files, like the sidebar. To be able to add Vite assets, you have to copy one file from the package to your project files:

```bash
# do this from the root directory of your project
mkdir -p resources/views/vendor/backpack/base/inc
cp vendor/backpack/crud/src/resources/views/base/inc/head.blade.php resources/views/vendor/backpack/base/inc/head.blade.php
```

{{< alert type="info" >}}
If you are on Windows or want to do it manually: Create the `resources/views/vendor/backpack/base/inc` directory and copy the file `vendor/backpack/crud/src/resources/views/base/inc/head.blade.php` into it.
{{</ alert >}}

After you copied the `head.blade.php` file, open it. It should contain a lot of code which controls meta tags and styles loading. In that file, you can add the `@vite()` Blade tag with your needed files like this:

```html
{{-- Custom admin styles and scripts --}
@vite(['resources/css/admin.css'])
```

After customizing the head.blade.php file, uncomment any custom styles and scripts in the `config/backpack/base.php` file.
That's it. Backpack should now correctly load the specified assets built with Vite.
