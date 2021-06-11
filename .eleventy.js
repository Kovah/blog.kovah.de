const htmlmin = require('html-minifier');
const Image = require('@11ty/eleventy-img');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const OUTDIR = 'dist';

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

  return {
    dir: {input: 'src', output: OUTDIR, data: '_data'}
  };
};
