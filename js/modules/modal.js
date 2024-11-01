export default function showModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (btnAbrir && btnFechar && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function outclickModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", outclickModal);
  }
}
