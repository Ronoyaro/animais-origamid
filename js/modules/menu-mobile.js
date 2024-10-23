import clickOutside from "./clickOutside.js";

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('#menu')
  
  if(menuButton){
    function openMenu(event) {
      event.stopPropagation();
      menuButton.classList.add('active');
      menuList.classList.add('active');
      clickOutside(menuList, ['click', 'touchstart'], () => {
        menuButton.classList.remove('active');
        menuList.classList.remove('active');
      })
    }
  
    menuButton.addEventListener('click', openMenu)
  } 
  
}

