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

document.querySelectorAll('.format-date').forEach(($e) => {
  const date = new Date($e.dateTime);
  $e.innerHTML = date.toLocaleDateString();
});

document.querySelectorAll('.format-datetime').forEach(($e) => {
  const date = new Date($e.dateTime);
  $e.innerHTML = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { timeStyle: 'short' });
});

document.querySelectorAll('.format-number').forEach(($e) => {
  $e.innerHTML = new Intl.NumberFormat().format(parseFloat($e.innerHTML));
});
