const mix = require('laravel-mix');

// Config
mix
  .setPublicPath('./dist/assets')
  .options({
    processCssUrls: false
  })
  .disableNotifications();

// Asset tasks
mix.postCss('src/assets/styles/main.css', 'styles')
  .postCss('src/assets/styles/highlighter.css', 'styles')
  .js('src/assets/scripts/app.js', 'scripts');
