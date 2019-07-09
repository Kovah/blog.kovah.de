import Webmentions from './Webmentions';

window.onload = function () {

  const $webmentions = document.querySelector('.webmentions');
  if ($webmentions) {
    new Webmentions($webmentions);
  }
};
