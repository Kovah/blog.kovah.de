import { resolve } from 'node:path';

/** @type {import('vite').UserConfig} */
export default {
  root: '.',
  css: {
    devSourcemap: true,
  },
  // Prevent Vite from copying the project's public/ directory into outDir
  publicDir: false,
  build: {
    outDir: 'assets/dist',
    assetsDir: '',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        'app': resolve(__dirname, 'assets/js/app.js'),
        'highlighter': resolve(__dirname, 'assets/js/highlighter.js'),
        'app.css': resolve(__dirname, 'assets/styles/app.css'),
        // 'highlighter.css': resolve(__dirname, 'assets/styles/highlighter.css'),
      },
      output: {
        // Prevent Vite from hashing files because that's dony by Hugo
        entryFileNames: ({ name }) => `[name].js`,
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name && assetInfo.name.includes('.')
            ? assetInfo.name.slice(assetInfo.name.lastIndexOf('.'))
            : '';
          const base = assetInfo.name ? assetInfo.name.replace(ext, '') : '[name]';
          return `${base}${ext}`;
        },
      },
    },
    target: 'es2019',
    minify: 'esbuild',
  },
};
