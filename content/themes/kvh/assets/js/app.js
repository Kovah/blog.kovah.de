import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/pro-light-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

window.onload = function () {
  // Font Awesome
  library.add(faRss);
  library.add(faTwitter);

  dom.i2svg();
};
