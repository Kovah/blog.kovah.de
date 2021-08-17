const {DateTime} = require('luxon');
const htmlmin = require('html-minifier');
const site = require('./src/_data/site.json');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const {imageShortcode, linkedImageShortcode} = require('./src/_includes/shortcodes/images');

const OUTDIR = 'dist';

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({'public': '/'});

  eleventyConfig.addShortcode('image', imageShortcode);
  eleventyConfig.addShortcode('linkedimage', linkedImageShortcode);
  eleventyConfig.addShortcode('currentYear', () => DateTime.now().year);
  eleventyConfig.addShortcode('version', () => String(Date.now()));

  eleventyConfig.addPairedShortcode('table', (content) => {
    return `<div class="w-full overflow-x-auto">${content}</div>`;
  });

  eleventyConfig.addFilter('formatDate', function (date, format, locale) {
    locale = locale ? locale : 'en';
    return DateTime.fromJSDate(date).toFormat(format, {locale});
  });

  eleventyConfig.addFilter('permalink', function (page) {
    return site.url + page.url;
  });

  eleventyConfig.setBrowserSyncConfig({
    files: `./${OUTDIR}/assets/styles/main.css`
  });

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
      });
    }
    return content;
  });

  const localizedCollections = ['post'];
  site.langs.map(langEntry => {
    for (const localizedCollection of localizedCollections) {
      // Produces collection with the pluralized name + '_' + locale ('posts_en') by pulling all entries of the lang directory
      eleventyConfig.addCollection(`${localizedCollection}s_${langEntry.id}`, function (collectionApi) {
        return collectionApi.getFilteredByGlob(`src/${langEntry.id}/**/*.md`);
      });
    }
  });

  return {
    dir: {input: 'src', output: OUTDIR, data: '_data'}
  };
};
