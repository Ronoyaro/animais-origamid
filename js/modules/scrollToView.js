export function initScrollToView() {

  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInterno.length) {
    function smoothNav(event) {
      event.preventDefault();
      const href = this.getAttribute('href')
      const sectionScrolled = document.querySelector(href)
      sectionScrolled.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    linksInterno.forEach((link) => {
      link.addEventListener('click', smoothNav)
    })
  }
}