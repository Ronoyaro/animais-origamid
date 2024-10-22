export default function AnimaScroll() {
  const sections = document.querySelectorAll('.js-section');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6
    function aniScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const expression = (sectionTop - windowMetade) < 0
        if (expression) {
          section.classList.add('ativo')
        }
      })
    }

    window.addEventListener('scroll', aniScroll)
    aniScroll()
  }
}