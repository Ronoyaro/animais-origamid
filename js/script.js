//Navegação por Tab
import { ScrollToView } from "./modules/scrollToView.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/nav-tab.js";
import ShowModal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import AnimaScroll from "./modules/animaScroll.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import businessHour from "./modules/businessHour.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";

AnimaScroll();
dropDownMenu();
menuMobile();
businessHour();
fetchAnimais();
fetchBitcoin();

const scrollToView = new ScrollToView('.js-menu a[href^="#"]');
scrollToView.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav(".js-tabMenu li", ".js-tabContent section");
tabNav.init();

const showModal = new ShowModal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
showModal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();
