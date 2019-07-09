export default class Webmentions {

  constructor ($el) {
    this.$el = $el;
    this.$mentionCount = $el.querySelector('.webmentions__mention-count');

    this.entryUrl = this.$el.dataset.entryUrl;
    this.counts = null;

    this.init();
  }

  init () {
    this.getCountsFromAPI();
  }

  getCountsFromAPI () {
    const url = 'https://webmention.io/api/count?target=' + this.entryUrl;
    fetch(url)
      .then(res => res.json())
      .then((counts) => {
        this.counts = counts;
        this.updateCounts();
      })
      .catch(err => { throw err; });
  }

  updateCounts () {
    if (typeof this.counts.type.mention !== 'undefined') {
      this.$mentionCount.innerHTML = this.counts.type.mention;
    }
  }
}
