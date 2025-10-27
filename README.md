# Kovah.de Blog

Hi there. This is the repository of my personal blog at [blog.woblick.dev](https://blog.woblick.dev). To find out more about this statically hosted site based on Hugo, read the [corresponding blog post](https://blog.woblick.dev/en/2019/static-blog-with-hugo/).

You may find some useful shortcodes and configurations in this repo but besides the content there is not really much in here. Reading content through Github should basically work because it's all Markdown, but images, internal links and some other small parts may be broken due to usage of Hugo shortcodes.

## Technology Overview

### Base

* Static site generator: [Hugo](https://gohugo.io/)
* Frontend stuff: [Laravel Mix](https://laravel-mix.com/), [Tailwind CSS](https://tailwindcss.com/)

### Special Features

* Accepts Webmentions via [Webmention.io](https://webmention.io/)


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
