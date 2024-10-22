export default function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabMenu li');
  const tabContent = document.querySelectorAll('.js-tabContent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    function navigatorTab(index) {
      tabContent.forEach(item => item.classList.remove('ativo'))
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        navigatorTab(index)
      })
    })
  }
}