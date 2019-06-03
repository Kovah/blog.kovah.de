import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/pro-light-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons/faArrowRight';

import loadSyntaxHighlighter from './helper/highlighter-loader';
import Reveal from './modules/Reveal';

window.onload = function () {
  const $revealModules = document.querySelectorAll('.kg-image');
  const revealCount = $revealModules.length;
  console.log($revealModules, revealCount); //@DEBUG

  if (revealCount > 0) {
    for (let i = 0; i < revealCount; i++) {
      new Reveal($revealModules[i]);
    }
  }

  // Font Awesome
  library.add(faRss);
  library.add(faGlobe);
  library.add(faArrowLeft);
  library.add(faArrowRight);
  library.add(faTwitter);
  library.add(faGithub);
  library.add(faLinkedinIn);
  library.add(faXing);

  dom.i2svg();

  loadSyntaxHighlighter();
};
