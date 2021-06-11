---
author: Kevin Woblick
date: 2017-01-19 16:40:15+00:00
draft: false
title: Programmatically add Custom Buttons to the Wordpress TinyMCE Editor
description: You can add 10 new custom buttons to the Wordpress Richtext Editor (TinyMCE) manually and bloat your functions.php – or you use this dynamic batch-like approach.
type: post
url: /en/programmatically-add-custom-buttons-wordpress-tinymce-editor/
hascode: true
categories:
- Tutorial
tags:
- JavaScript
- PHP
- TinyMCE
- Wordpress
---

I recently faced the problem that I had to extend the Wordpress Editor (also known as Wordpress TinyMCE) with a lot of different custom buttons for different modules. As each module has its own JavaScript code that handles the button functionality, you can't just take one skeleton file and exchange the function names. So you may go with adding the JavaScript file for each module manually - or do this programmatically.

## How to "batch add" Custom Buttons to the Wordpress Editor

To add a custom button to the Wordpress Editor you have to add three different filters to your `functions.php` file. The first one, `admin_head`, checks if current user is allowed to edit post or pages and if the rich text editor (TinyMCE) is activated. The following two, `mce_external_plugins` and `mce_buttons` are needed to load the JavaScript file and register the new button within the editor interface. Pretty much for one simple button, huh? So I wrote this loop that is capable of adding 10, 50 or even 100 custom buttons to the editor.


```php
<?php
/**
 * Module loader for custom buttons that need advanced TinyMCE support
 */
function kvh_tinymce_module_loader()
{
    $tinymce_modules = [
        'youtube_player' => 'youtube-player',
        'review' => 'review',
        'usercard' => 'usercard',
        'cta' => 'cta',
    ];

    $i = 10;

    foreach ($tinymce_modules as $module => $directory) {
        $module = 'kvh_' . $module . '_btn';

        // Hooks your functions into the correct filters
        add_action('admin_head', function () use ($module, $directory, $i) {

            // Check user permissions
            if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
                return;
            }

            // Check if WYSIWYG is enabled
            if ('true' == get_user_option('rich_editing')) {
                // Load the JS file that handles the button
                add_filter('mce_external_plugins', function ($plugin_array) use ($module, $directory) {
                    $plugin_array[$module] = get_template_directory_uri() . "/modules/$directory/_editor.js";
                    return $plugin_array;
                }, $i);

                // Add the button to the editor UI
                add_filter('mce_buttons', function ($buttons) use ($module) {
                    array_push($buttons, $module);
                    return $buttons;
                }, $i);
            }
        });

        // Load the shortcode handler
        require(get_template_directory() . "/modules/$directory/_shortcode.php");

        // Unset the variables
        unset($module, $file);
        $i++;
    }
}
kvh_tinymce_module_loader();
```

## What is the code doing?

* First, all modules are defined in the `$tinymce_modules` array. PHP then loops trough this array.
* `$module` gets the predefined identifier for the button that consists of the prefix kvh_, the module name and the suffix _btn. This just makes sure the custom button gets a unique identifier.
* Then, the admin_head filter is called which is able to inject the new button inside the admin header.
* Three checks are performed to check if the module needs to be loaded. If the user can't edit posts and the richtext editor (aka TinyMCE) is not loaded, the module doesn't need to be loaded.
* After that the two register filters are called: `mce_external_plugins` and `mce_buttons`
    * `mce_external_plugins` dynamically loads the corresponding JavaScript file based of the passed directory name.
    * `mce_buttons` dynamically registers the new button based on the unique identifier we created above.

The main difference between the regular approach of using filters and this one is, that we are using PHP closures and anonymous functions here. Normally you would do something like this:

```php
function kvh_register_ytplugin_js($plugin_array)
{
    $plugin_array['embed-yt'] = get_template_directory_uri() . '/modules/youtube/_editor.js';
    return $plugin_array;
}
```

As this approach would bloat our functions file with hundreds of different functions, each named after the plugin that needs to be loaded, we use this:

```php
add_filter('mce_external_plugins', function ($plugin_array) use ($module, $directory)
{
    $plugin_array[$module] = get_template_directory_uri() . "/modules/$directory/_editor.js";
    return $plugin_array;
}, $i);
```

where we only pass the module name (`$module`) and the corresponding directory (`$directory`) to the function.

## Additional notes

* Make sure that you set the correct folder structure. You may also load the plugin JavaScript file by doing something like this: `get_template_directory_uri() . "/editorplugins/$module.js";`
* The `$i` variable is used to prevent that the functions overwrite the TinyMCE buttons array. `$i` increases the priority of the `mce_buttons` filter with each module imported. If you want to alter the buttons earlier or later make sure to choose a priority that is below or above the last `$i` value.

The full code is also available on [Github](https://gist.github.com/Kovah/0363e802dc28547cf5ab7de5ee0bba6c).
