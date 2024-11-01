//Navegação por Tab
import { ScrollToView } from "./modules/scrollToView.js";
import Accordion from "./modules/accordion.js";
import showModal from "./modules/modal.js";
import initTabNav from "./modules/nav-tab.js";
import AnimaScroll from "./modules/animaScroll.js";
import initTooltip from "./modules/tooltip.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import businessHour from "./modules/businessHour.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";

showModal();
initTabNav();
AnimaScroll();
initTooltip();
dropDownMenu();
menuMobile();
businessHour();
fetchAnimais();
fetchBitcoin();

const scrollToView = new ScrollToView('.js-menu a[href^="#"]');
scrollToView.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();
