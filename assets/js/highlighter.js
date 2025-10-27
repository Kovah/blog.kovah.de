import 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';

import "dracula-prism/dist/css/dracula-prism.css";

import Prism from 'prismjs';

// Run highlighting on load
if (typeof window !== 'undefined') {
  window.Prism = Prism;
  document.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
  });
}

