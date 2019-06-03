import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/pro-light-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons/faArrowRight';

window.onload = function () {
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
};
