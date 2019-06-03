export default class Reveal {

  constructor ($el) {
    this.$el = $el;
    this.revealed = false;

    this.observer = new IntersectionObserver(this.elementInViewport.bind(this), {
      rootMargin: '0px',
      threshold: 0.2
    });

    this.observer.observe(this.$el);

    if ($el.getBoundingClientRect().top > window.scrollY + window.innerHeight) {
      this.hideElement();
    }
  }

  elementInViewport (entries) {
    if (!this.revealed && entries[0].isIntersecting) {
      this.revealElement();
      this.observer.disconnect();
    }
  }

  hideElement () {
    this.$el.classList.add('kg-image--hidden');
  }

  revealElement () {
    this.$el.classList.add('kg-image--reveal');
  }
}
