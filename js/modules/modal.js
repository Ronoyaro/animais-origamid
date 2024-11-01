export default class ShowModal {
  constructor(btnAbrir, btnFechar, modalContainer) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.modalContainer = document.querySelector(modalContainer);
    this.toggleModal = this.toggleModal.bind(this);
    this.outclickModal = this.outclickModal.bind(this);
  }
  toggleModal(event) {
    event.preventDefault();
    this.initModal();
  }
  initModal() {
    this.modalContainer.classList.toggle("ativo");
  }
  outclickModal(event) {
    if (event.target === this.modalContainer) {
      this.initModal();
    }
  }
  init() {
    this.btnAbrir.addEventListener("click", this.toggleModal);
    this.btnFechar.addEventListener("click", this.toggleModal);
    this.modalContainer.addEventListener("click", this.outclickModal);
    return this;
  }
}
