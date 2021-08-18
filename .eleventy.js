const util = require('util');
const {DateTime} = require('luxon');
const htmlMin = require('html-minifier');
const site = require('./src/_data/site.json');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const {
  imageShortcode,
  linkedImageShortcode
} = require('./src/_includes/shortcodes/images');

const OUTPUT_DIR = 'dist';

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

  eleventyConfig.addFilter('console', function (value) {
    return util.inspect(value);
  });

  eleventyConfig.addFilter('paginationPages', function (pagination, currentPage) {
    const currentPageIndex = pagination.pages.findIndex(page => page.url === currentPage.url);
    const startPage = currentPageIndex < 5 ? 0 : currentPageIndex - 4;
    const endPage = startPage + 9 < pagination.pages.length ? startPage + 9 : pagination.pages.length - 1;
    return pagination.pages.slice(startPage, endPage);
  });

  eleventyConfig.setBrowserSyncConfig({
    files: `./${OUTPUT_DIR}/assets/styles/main.css`
  });

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
      });
    }
    return content;
  });

  site.langs.map(langEntry => {
    // Produces collection with the pluralized name + '_' + locale ('posts_en') by pulling all entries of the lang directory
    eleventyConfig.addCollection(`posts_${langEntry.id}`, function (collectionApi) {
      return collectionApi.getFilteredByGlob(`src/${langEntry.id}/**/*.md`);
    });

    // Category collection
    site.categories.forEach(category => {
      eleventyConfig.addCollection(`category_${category}_${langEntry.id}`, function (collectionApi) {
        return collectionApi.getAll().filter(post => post.data.category === category && post.data.locale === langEntry.id);
      });
    });
  });

  return {
    dir: {input: 'src', output: OUTPUT_DIR, data: '_data'}
  };
};
