export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
  }
  navigatorTab(index) {
    this.tabContent.forEach((item) => item.classList.remove("ativo"));
    this.tabContent[index].classList.add("ativo");
  }
  addNavigatorEvent() {
    if (this.tabMenu && this.tabContent) {
      this.tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
          this.navigatorTab(index);
        });
      });
    }
  }
  init() {
    this.addNavigatorEvent();
    this.navigatorTab(0);
    return this;
  }
}
