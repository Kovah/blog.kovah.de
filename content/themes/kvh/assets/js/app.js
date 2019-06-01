import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/pro-light-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';

window.onload = function () {
  // Font Awesome
  library.add(faRss);
  library.add(faGlobe);
  library.add(faTwitter);
  library.add(faGithub);
  library.add(faLinkedinIn);
  library.add(faXing);

  dom.i2svg();
};
