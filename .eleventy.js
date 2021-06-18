const htmlmin = require('html-minifier');
const Image = require('@11ty/eleventy-img');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require('luxon');

const OUTDIR = 'dist';
const site = require('./src/_data/site.json');

async function imageShortcode (src, alt, attributes = '{}', sizes = '768,1024') {
  sizes = sizes.split(',').map(size => parseInt(size));
  const path = src.substring(0, src.lastIndexOf("/"));

  let metadata = await Image('src/' + src, {
    widths: sizes,
    formats: ['avif', 'jpeg', 'webp'],
    outputDir: `${OUTDIR}/${path}`,
    urlPath: `/${path}/`
  });

  let imageAttributes = {
    alt,
    sizes: sizes.map(size => `(max-width: ${size}px)`).toString(),
    loading: 'lazy',
    decoding: 'async',
    ...JSON.parse(attributes)
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({'public': '/'});

  eleventyConfig.addShortcode('image', imageShortcode);
  eleventyConfig.addShortcode('currentYear', () => (new Date()).getFullYear());
  eleventyConfig.addShortcode('version', () => String(Date.now()))

  eleventyConfig.addFilter('formatDate', function (date, format, locale) {
    locale = locale ? locale : "en";
    return DateTime.fromJSDate(date).toFormat(format, { locale });
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
