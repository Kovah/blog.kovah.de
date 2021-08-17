export default class Webmentions {

  constructor ($el) {
    this.$el = $el;
    this.$mentionCount = $el.querySelector('.mention-count');
    this.$repostCount = $el.querySelector('.repost-count');
    this.$likeCount = $el.querySelector('.like-count');

    this.entryUrl = this.$el.dataset.entryUrl;
    this.counts = null;

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
    if (!this.counts.type.mention) {
      this.$mentionCount.innerHTML = this.counts.type.mention;
    }

    if (!this.counts.type.repost) {
      this.$repostCount.innerHTML = this.counts.type.repost;
    }

    if (!this.counts.type.like) {
      this.$likeCount.innerHTML = this.counts.type.like;
    }
  }
}
