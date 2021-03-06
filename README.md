# Kovah.de Blog

Hi there. This is the repository of my personal blog at [blog.kovah.de](https://blog.kovah.de). To find out more about this statically hosted site based on Hugo, read the [corresponding blog post](https://blog.kovah.de/en/2019/static-blog-with-hugo/).

You may find some useful shortcodes and configurations in this repo but besides the content there is not really much in here. Reading content through Github should basically work because it's all Markdown, but images, internal links and some other small parts may be broken due to usage of Hugo shortcodes.

## Technology Overview

### Base

* Static site generator: [Hugo](https://gohugo.io/)
* Frontend stuff: [Laravel Mix](https://laravel-mix.com/)

### Special Features

* Accepts Webmentions via [Webmention.io](https://webmention.io/)
* ~Publishable to the [dat:// network](https://dat.foundation/)~


## License

The content is licensed as [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) if not stated otherwise.
The source code of this blog is licensed as [MIT](https://opensource.org/licenses/MIT).


---

## Installation and local development

Install all dependencies:
```
brew install hugo
npm install
```

To build the frontend:
```
npm run production
# or for continious development
npm run watch
```

To start the Hugo server and view the site in your browser:
```
npm run serve
```


---


## Publish to DAT (Deprecated)

The following information are useful when publishing to the dat:// network but are written exclusively for my site.

### Preparations

```
# Delete existing files
rm -rf public

# Generate the assets
npm install
npm run production
```

### Create new DAT site

```
# Generate the blog
hugo

# Generate webp images
find public/en -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp
find public/de -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp

# Either create a new DAT
dat create public --title "Kovah.de Blog" --description "Kovah.de Blog - My personal blog about topics like Web Development, Programming, Gaming and the Internet"

# Export the secret key to edit the .dat later
dat keys export public
```

### Update an existing DAT site

```
# Generate assets and delete deprecated ones
npm run production
find public -type f -maxdepth 1 -name "*.css" -o -name "*.js" | xargs rm

# Delete old images
find public -type f -name "*.jpg" -o -name "*.png" | xargs rm

# Generate the blog
hugo --gc -b 'dat://fd1c022637e708328f44427cb04b1ebda3c41ff2044403fcfc188885a499ce8c/'

# Generate webp images if new images were added
find public/{en,de} -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp

# Sync the new version if syncing is not running
dat sync public
```
