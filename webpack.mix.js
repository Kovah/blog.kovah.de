const mix = require('laravel-mix');
require('laravel-mix-polyfill');

// Config

mix.options({
  processCssUrls: false
});

mix.webpackConfig({
  watchOptions: {
    ignored: ['public', 'node_modules']
  }
});

mix.browserSync({
  proxy: 'localhost:1313'
});

mix.disableNotifications();

// Asset tasks

mix.js('assets/js/app.js', 'assets/dist/app.js')
  .polyfill({
    enabled: true,
    useBuiltIns: 'usage',
    targets: ['> 2%']
  });

mix.combine([
  'node_modules/prismjs/components/prism-core.js',
  'node_modules/prismjs/components/prism-markup.js',
  'node_modules/prismjs/components/prism-markup-templating.js',
  'node_modules/prismjs/components/prism-css.js',
  'node_modules/prismjs/components/prism-clike.js',
  'node_modules/prismjs/components/prism-javascript.js',
  'node_modules/prismjs/components/prism-git.js',
  'node_modules/prismjs/components/prism-markdown.js',
  'node_modules/prismjs/components/prism-php.js',
  'node_modules/prismjs/components/prism-scss.js',
  'node_modules/prismjs/components/prism-sql.js',
  'node_modules/prismjs/components/prism-bash.js'
], 'assets/dist/highlighter.js');

mix.sass('assets/styles/app.scss', 'assets/dist');
mix.sass('assets/styles/highlighter.scss', 'assets/dist');
