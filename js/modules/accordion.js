export default class Accordion {
  constructor(lists) {
    this.lists = document.querySelectorAll(lists);
  }

  toggleAccordionEvent(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }

  init() {
    if (this.lists.length) {
      this.lists.forEach((item) => {
        item.addEventListener("click", () => {
          this.toggleAccordionEvent(item);
        });
      });
      this.toggleAccordionEvent(this.lists[0]);
    }
  }
}
