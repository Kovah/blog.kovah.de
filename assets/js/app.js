import Webmentions from './Webmentions';
import MastoShare from './MastoShare';

window.onload = function () {
  const $webmentions = document.querySelector('.webmentions');
  if ($webmentions) {
    new Webmentions($webmentions);
  }
  const $mastoShare = document.querySelector('.mastodon-share');
  if ($mastoShare) {
    new MastoShare($mastoShare);
  }
};
