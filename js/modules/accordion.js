export default function initAccordion() {
  const questions = document.querySelectorAll(".js-accordion dt");
  const response = document.querySelector("dd").classList.add("ativo");

  if (questions.length) {
    function accordionList() {
      this.nextElementSibling.classList.add("ativo");
    }
    questions.forEach((quest) => {
      quest.addEventListener("click", accordionList);
    });
  }
}
