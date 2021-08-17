const Image = require('@11ty/eleventy-img');

const OUTDIR = 'dist';

async function generateMetaData (src, alt, attributes, sizes) {
  sizes = sizes.split(',').map(size => parseInt(size));
  const path = src.substring(0, src.lastIndexOf('/'));

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

  return [metadata, imageAttributes];
}

async function imageShortcode (src, alt, attributes = '{}', sizes = '768,1024') {
  const [metadata, imageAttributes] = await generateMetaData(src, alt, attributes, sizes);
  return Image.generateHTML(metadata, imageAttributes);
}

async function linkedImageShortcode (src, alt, attributes = '{}', sizes = '768,1024') {
  const [metadata, imageAttributes] = await generateMetaData(src, alt, attributes, sizes);
  const largestImageUrl = metadata.jpeg[metadata.jpeg.length - 1].url;
  return `<a href="${largestImageUrl}" class="block">${Image.generateHTML(metadata, imageAttributes)}</a>`;
}

exports.imageShortcode = imageShortcode;
exports.linkedImageShortcode = linkedImageShortcode;
