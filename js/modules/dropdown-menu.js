import clickOutside from "./outsideClick.js";

export default function dropDownMenu() {
  const dropDownElement = document.querySelectorAll('[data-dropdown]');

  function showDropDown(event) {
    event.preventDefault();
    this.classList.add('ativo');
    clickOutside(this, ['click', 'touchstart'], () => {
      this.classList.remove('ativo');
    })
  }
  dropDownElement.forEach((element) => {
    ['touchstart', 'click'].forEach((eventType) => {
      element.addEventListener(eventType, showDropDown);
    })
  })
}


