export default class MastoShare {

  constructor ($el) {
    this.key = 'mastodon-instance';
    this.$el = $el;
    this.$btn = $el.querySelector('.mastodon-button');
    this.$dialog = $el.querySelector('dialog');
    this.$input = $el.querySelector('dialog input');

    this.init();
  }

  init () {
    this.$btn.addEventListener('click', () => {
      this.$dialog.show();
    });
    this.$dialog.addEventListener('close', this.share.bind(this));

    if (localStorage.getItem(this.key)) {
      this.$dialog.querySelector('input').value = localStorage.getItem(this.key);
    }
  }

  share () {
    if (this.$dialog.returnValue === 'cancel') return;
    let instance = this.$input.value;
    if (instance) {
      instance = instance.replace(/https?:\/\//, '');
      localStorage.setItem(this.key, instance);
      this.$dialog.querySelector('input').value = instance;
      const shareUrl = `https://${instance}/share?text=${this.$btn.dataset.shareContent}`;
      window.open(shareUrl, 'mozillaTab');
    }
  }
}
