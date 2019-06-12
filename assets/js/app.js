import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faBook } from '@fortawesome/pro-light-svg-icons/faBook';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons/faEnvelope';
import { faKey } from '@fortawesome/pro-light-svg-icons/faKey';

import { fa500px } from '@fortawesome/free-brands-svg-icons/fa500px';
import { faBehance } from '@fortawesome/free-brands-svg-icons/faBehance';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';

window.onload = function () {

  // Font Awesome
  library.add(faBook);
  library.add(faEnvelope);
  library.add(faKey);
  library.add(fa500px);
  library.add(faBehance);
  library.add(faGithub);
  library.add(faInstagram);
  library.add(faLinkedinIn);
  library.add(faDev);
  library.add(faTwitter);
  library.add(faXing);

  dom.i2svg();
};
