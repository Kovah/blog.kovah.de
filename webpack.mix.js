const mix = require('laravel-mix');

// Config
mix
  .options({
    processCssUrls: false
  })
  .webpackConfig({
    watchOptions: {
      ignored: ['public', 'node_modules']
    }
  })
  .browserSync({
    proxy: 'localhost:1313'
  })
  .disableNotifications();

// Asset tasks
mix.js('assets/js/app.js', 'assets/dist/app.js');

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

mix.css('assets/styles/app.css', 'assets/dist');
mix.css('assets/styles/highlighter.css', 'assets/dist');
