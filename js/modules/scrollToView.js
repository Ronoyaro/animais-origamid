export class ScrollToView {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = options ?? { behavior: "smooth", block: "start" };
    this.smoothNav = this.smoothNav.bind(this);
  }
  smoothNav(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const sectionScrolled = document.querySelector(href);
    sectionScrolled.scrollIntoView(this.options);
  }
  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.smoothNav);
    });
  }
  init() {
    if (this.linksInternos) {
      this.addLinkEvent();
      return this;
    }
  }
}
