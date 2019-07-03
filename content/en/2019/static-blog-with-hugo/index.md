---
title: Rebuilding my blog as a stastic site with Hugo
description: I share some insights about rebuilding this blog, originally based on Wordpress, as a static site with Hugo.

author: Kevin Woblick
date: 2019-07-02T22:12:52+02:00
draft: false
hascode: true

categories:
- Article
tags:
- Hugo
- Static Site Generator
- Wordpress
---

This blog, started [back in 2010]({{< ref path="/2010/various/2010-12-01-politik-simulator-2.md" lang="de" >}}), was ever since based on Wordpress. This makes sense as Wordpress was basically the most easy-to-use software for the web that allowed you to start your blog within a couple of minutes. Years passed and now I decided to ditch Wordpress completely. Follow me on my journey from Wordpress to a static site built with [Hugo](https://gohugo.io/).


## Why I ditched Wordpress for Hugo

Wordpress was super easy to set up back in the days. Installed a nice looking theme, and I was ready to publish some articles. In the meantime, the economy around the system changed a lot, the software once created to host your blog became a CMS. In 2014, I started an English version of my blog. It was first created using a blog network. Later on I got very ambitious and the way I wanted to manage my content was not compatible with networks, so I split up the network into two separate blogs in sub directories.

Well, it worked. Kind of. But it was hard to manage and the increasing interest in Wordpress as a software attracted more and more hackers. Despite not being hacked I was afraid to find my blog equipped with malware or stuff like that in the future.
A year ago I turned off comments entirely. The mass of spam comments took way too much time to moderate.

{{< image img="cms-cant-be-hacked.jpg" alt="Your CMS can't be hacked if you don't have one" modifier="right" >}}

Security being one of the major factors and the amount of maintenance required to keep the blog running, I started to take a look at other solutions.
I have blog posts, no dynamic content that changes once a visitor opens the site. For what reason do I need a dynamic website then?
Soon I jumped the static site generation train and just a few weeks later my portfolio [kovah.de](https://kovah.de/) was deployed as a static website based on Hugo.


## Jekyll, Gatsby, Hugo, Next.js?!

Static site generation is a big thing lately. There are a couple of systems out there you can use, from the good 'ol Jekyll, to Gatsby and special solutions like Next.js for React-based sites, to modern generators like Gatsby and Hugo. If you are interested, [staticgen.com](https://www.staticgen.com/) might have some more resources for you.

So, which system do I use now? I already worked with Jekyll but the system looked a bit too complicated for ma multi-lang blog system. Next.js and Gatsby are not for me because I don't want to use React for a simple blog. That's why I wanted to give Hugo a try, as one of the last larger frameworks remaining. And know what? Even with some smaller hiccups I am very happy with the system.


---


## Details about my Hugo setup

It's quite easy to get started with Hugo. Install it, generate a new site, create the first content and voila, you have a site running, done in 10 Minutes. The interesting part is what comes next: configuration, localization, setting up the layout and structure, and adding the frontend.


### Base configuration and localization

To be honest, the site configuration file is not really long and there's not much to say about it. Set the site title, the base URL and some other various settings like the pagination amount.

The documentation is straight forward about setting up different languages and it took me only a few hours to configure the blog to work as I want it to work. So, here's the language config:

```toml
DefaultContentLanguage = "en"
defaultContentLanguageInSubdir = true

[languages]
[languages.en]
  contentDir = "content/en"
  languageName = "EN"
  languageCode = "en-us"
  weight = 1

[languages.de]
  contentDir = "content/de"
  languageName = "DE"
  languageCode = "de-de"
  weight = 2
```

I think it's quite self-explanatory. The only unusual setting here is `defaultContentLanguageInSubdir = true`, which redirects all icoming requests to the root directory `https://blog.kovah.de/` to `https://blog.kovah.de/en/` exactly like in the old Wordpress setup. Thanks to the Hugo dev for implementing this special setting!


### Keep it simple without a theme

One of the first steps while creating your first Hugo site is to pull a theme and enable it in your config. However, after experimenting a bit with my portfolio, I ditched the whole theme structure. The thing is that you can configure and build the whole site structure using only the basic `layouts` folder, without any theme. Themes are actually only useful if you want to use an external theme or re-use an existing theme from another site.

Ditching the theme made the whole layouting-process a lot easier because you now have only one directory to look at. All base layouts for the index page, category pages and single posts, all partials and all shortcodes are located in the layouts folder.


### Frontend assets and static files

If you know Laravel, you may already worked with Laravel Mix. It's basically a wrapper for Webpack and all this complicated module bundling asset compilation stuff. I replaced my old Grunt-based asset workflow with Laravel Mix because it's just way easier and required a lot less configuration. To make it work with Hugo and the built-in asset handling, I set up the following directory structure:

```shell
/
├─ assets
│ ├─ dist
│ ├─ scripts
│ └─ styles
├─ ...
```

There is no magic happening here: 'scripts' contains all basic scripts (If I had any) and 'styles' all Scss files. Laravel Mix takes care of the assets and puts the minified and optimized assets into the 'assets/dist' directory. I tell Hugo about the location of my assets by dropping 'assetDir = "./assets/dist"' into the config file.

A neat feature Hugo provides is asset fingerprinting. Instead of fingerprinting the assets with Laravel Mix and trying to get this information into Hugo, I just let Hugo generate everything for me. To do so, I use the following code, e.g. for the styles file:

```html
{{ $appcss := resources.Get "app.css" | fingerprint }}
<link rel="stylesheet" href="{{ $appcss.Permalink | relURL }}">
```

`$appcss := resources.Get "app.css" | fingerprint` tells Hugo to search for the `app.css` file in the resource directory and then fingerprint it. The code inside the link just tells Hugo to output a relative URL to the asset file.  
The result looks like this: `<link rel="stylesheet" href="/app.49b14501b[...]a621f4b.css">`

You can use the same technique for the Prism.js asset which is conditionally output based on the post front matter flag:

```html
{{ with .Params.hascode }}
  {{ if . }}
    {{ $highlightjs := resources.Get "highlighter.js" | fingerprint }}
    <script src="{{ $highlightjs.Permalink | relURL }}"></script>
  {{ end }}
{{ end }}
```


### Problems with syntax highlighting

I really wanted to use the built-in syntax highlighting. I really wanted to and I tried it. Unfortunately, Chroma, the library used to render code blocks with syntax highlighting, does not support inline PHP like this:

    ```php
    $some_variable = $a + $b;
    ```

There is a lot of code on my blog, a lot of PHP and it just don't make any sense to start one-liners like the one above with a `<?php` line. The support told me that Chroma just don't support it and I would have to use Pygments for that. Pygments is the old code parser, slower than Chroma and requires to be installed in the PATH to be used by Hugo. As I don't wanted to give it a try I now use Prism.js from my Wordpress blog which works without any issues.  
Maybe I give Pygments a try later on but for now the 10kb of JS won't hurt anyone, in fact it's only loaded if needed, by using a `hascode: true` flag in the post's front matter.


### Some shortcodes for various elements

As I have several elements within posts that are not standard Markdown, I created some shortcodes for them. Shortcodes work exactly like in Wordpress but are way easier to set up.

_PS: To stop Hugo from rendering the actual shortcodes, I had to add spaces between the curly braces and the lower-than signs. To use the shortcode, write them like this: {{&lt; shortcode &gt;}}_

#### The image shortcode

I do not have any scripts so images are not lazy-loaded. However, I wanted to provide responsive images based on the viewport size. As Hugo usually bundles images with the corresponding post, you can do something like this:

**Inside the post**
```html
{{ < image img="cms-cant-be-hacked.jpg" alt="Your CMS can't be hacked if you don't have one" modifier="right" > }}
```

**The shortcode**
```html
{{ $original := .Page.Resources.GetMatch (.Get "img") }}
{{ $image := $original.Resize "1000x" }}
{{ $small_image := $original.Resize "500x" }}
<figure{{ with .Get "modifier"}} class="figure--{{.}}"{{ end }}>
  <picture>
    <source srcset='{{ $small_image.RelPermalink }}' media="(max-width: 500px)"/>
    <source srcset='{{ $image.RelPermalink }}' media="(max-width: 1000px)"/>
    <img src='{{ $original.RelPermalink }}'
        width="{{ $original.Width }}" height="{{ $original.Height }}"
        {{ with .Get "alt"}}alt="{{.}}"{{ end }}/>
  </picture>
  {{ with .Get "caption"}}<figcaption>{{ . }}</figcaption>{{ end }}
</figure>
```

**Result**
```html
<figure class="figure--right">
  <picture>
    <source srcset="/en/2019/static-blog-hugo/cms-cant-be[...]0x0_resize_q85_box.jpg" media="(max-width: 500px)">
    <source srcset="/en/2019/static-blog-hugo/cms-cant-be[...]00x0_resize_q85_box.jpg" media="(max-width: 1000px)">
    <img src="/en/2019/static-blog-hugo/cms-cant-be-hacked.jpg" alt="Your CMS can't be hacked if you don't have one" width="546" height="492">
  </picture>
</figure>
```


#### Alert boxes

Quite useful and currently used to link to a translation, alert boxes render HTML divs. The twist: you can pass either HTML or Markdown into the shortcode and both is rendered perfectly.

**Inside the post**
```html
{{ < alert type="info" > }}
This will be rendered as [HTML](#).
{{ </ alert > }}
```

**The shortcode**
```html
<div class='alert{{ with (.Get "type") }} alert--{{ . }}{{ end }}'>
  {{ .Inner | markdownify }}
</div>
```

**Result**
```html
<div class="alert alert--info">
  This will be rendered as <a href="#">HTML</a>.
</div>
```

If you want to learn more about shortcodes and what you can do with them, take a look at the [Hugo documentation](https://gohugo.io/content-management/shortcodes/).


---


## Deplyoment: a few commands and no database hassle

Last but not least: deployment. I use Gitlab CI to run automated deployments when I push to the master branch. Gitlab then basically runs the following steps:

```
# Install dependencies for Laravel Mix and build the minified assets
npm install
npm run production

# Build the blog which generates everything in the /public directory
hugo

# Deploy that to the server
scp -r public user@server:/var/www/blog/
```

That's it. The public directory contains everything needed to run the blog.


## The result: a slim, fast and low-maintenance blog

To be honest, it took some time to get warm with Hugo because it's the first time I work with such a complex static site setup. Anyway, I am very happy with the results. Together with nginx as the webserver and Cloudflare as a CDN, I was able to cut the TTFB in half and reduce the page size (including HTML and assets, excluding images) by about 30%-40%. The page is now about 100-120kb large and loads in about 400-800ms (which already includes the Fathom-based anonymous page tracking!).  
Lighthouse certifies my efforts to slim the blog down with a clear score of 100.
