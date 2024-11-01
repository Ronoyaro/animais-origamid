/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n  const questions = document.querySelectorAll(\".js-accordion dt\");\r\n  const response = document.querySelector(\"dd\").classList.add(\"ativo\");\r\n\r\n  if (questions.length) {\r\n    function accordionList() {\r\n      this.nextElementSibling.classList.add(\"ativo\");\r\n    }\r\n    questions.forEach((quest) => {\r\n      quest.addEventListener(\"click\", accordionList);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\r\n  const numeros = document.querySelectorAll('[data-numero]')\r\n  function handleMutation(event) {\r\n    if (event[0].target.classList.contains('ativo')) {\r\n      numeros.forEach((numero) => {\r\n        const total = +numero.innerText;\r\n        let start = 0;\r\n        let incremento = Math.floor(total / 100)\r\n        const timer = setInterval(() => {\r\n          start += incremento\r\n          numero.innerText = start\r\n          if (start > total) {\r\n            clearInterval(timer)\r\n            numero.innerHTML = total\r\n          }\r\n        }, Math.random() * 35)\r\n      })\r\n      observer.disconnect()\r\n    }\r\n  }\r\n  const observerTarget = document.querySelector('.numeros');\r\n  const observer = new MutationObserver(handleMutation);\r\n\r\n  observer.observe(observerTarget, { attributes: true })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animals/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animaScroll.js":
/*!***********************************!*\
  !*** ./js/modules/animaScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaScroll)\n/* harmony export */ });\nfunction AnimaScroll() {\r\n  const sections = document.querySelectorAll('.js-section');\r\n  if (sections.length) {\r\n    const windowMetade = window.innerHeight * 0.6\r\n    function aniScroll() {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top\r\n        const expression = (sectionTop - windowMetade) < 0\r\n        if (expression) {\r\n          section.classList.add('ativo')\r\n        }\r\n      })\r\n    }\r\n    window.addEventListener('scroll', aniScroll)\r\n    aniScroll()\r\n  }\r\n}\n\n//# sourceURL=webpack://animals/./js/modules/animaScroll.js?");

/***/ }),

/***/ "./js/modules/businessHour.js":
/*!************************************!*\
  !*** ./js/modules/businessHour.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ businessHour)\n/* harmony export */ });\nfunction businessHour() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horariosSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n\r\n  const diaDeFuncionamento =\r\n    diasSemana.findIndex((dia) => dia === diaAgora) !== -1;\r\n  const horarioDeFuncionamento =\r\n    horarioAgora >= horariosSemana[0] && horarioAgora < horariosSemana[1];\r\n\r\n  if (diaDeFuncionamento && horarioDeFuncionamento) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/businessHour.js?");

/***/ }),

/***/ "./js/modules/clickOutside.js":
/*!************************************!*\
  !*** ./js/modules/clickOutside.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\n//o clickoutside funciona para regras que o element seja ele mesmo ou filhos,\r\n//ao passar no primeiro parametro algo que não seja o this, ele sempre irá retornar\r\n//false ao testar a expressão para ativar a função bubbleHtmlEvent\r\n\r\nfunction clickOutside(element, typeEvent, callback) {\r\n  const html = document.documentElement;\r\n  if (!element.hasAttribute(\"data-selected\")) {\r\n    element.setAttribute(\"data-selected\", \"\");\r\n    typeEvent.forEach((evt) => {\r\n      html.addEventListener(evt, bubbleHtmlEvent);\r\n    });\r\n  }\r\n  function bubbleHtmlEvent(event) {\r\n    if (!element.contains(event.target)) {\r\n      callback();\r\n      element.removeAttribute(\"data-selected\");\r\n      typeEvent.forEach((evt) => {\r\n        html.removeEventListener(evt, bubbleHtmlEvent);\r\n      });\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/clickOutside.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOutside.js */ \"./js/modules/clickOutside.js\");\n\r\n\r\nfunction dropDownMenu() {\r\n  const dropDownElement = document.querySelectorAll('[data-dropdown]');\r\n\r\n  function showDropDown(event) {\r\n    event.preventDefault();\r\n    this.classList.add('ativo');\r\n    (0,_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['click', 'touchstart'], () => {\r\n      this.classList.remove('ativo');\r\n    })\r\n  }\r\n  dropDownElement.forEach((element) => {\r\n    ['touchstart', 'click'].forEach((eventType) => {\r\n      element.addEventListener(eventType, showDropDown);\r\n    })\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animals/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais() {\r\n  async function animaisJson(url) {\r\n    const animaisResponse = await fetch(url)\r\n    const animaisJSON = await animaisResponse.json()\r\n    const sectionGrid = document.querySelector('.numeros-grid')\r\n  \r\n    animaisJSON.forEach(animal => {\r\n      sectionGrid.appendChild(createAnimalDiv(animal))\r\n    })\r\n    ;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  }\r\n  \r\n  function createAnimalDiv(animal) {\r\n    const div = document.createElement('div')\r\n    div.classList.add('numero-animal')\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\r\n    return div\r\n  }\r\n  \r\n  animaisJson('../js/apis/animaisapi.json')\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animals/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin() {\r\n  async function bitcoinApi() {\r\n    try {\r\n      const btcJson = await fetch('https://blockchain.info/ticker');\r\n      const bitcoin = await btcJson.json();\r\n      const showValue = document.querySelector('.btcApi');\r\n\r\n      showValue.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4);\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n  bitcoinApi();\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animals/./js/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOutside.js */ \"./js/modules/clickOutside.js\");\n\r\n\r\nfunction menuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]')\r\n  const menuList = document.querySelector('#menu')\r\n  \r\n  if(menuButton){\r\n    function openMenu(event) {\r\n      event.stopPropagation();\r\n      menuButton.classList.add('active');\r\n      menuList.classList.add('active');\r\n      (0,_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, ['click', 'touchstart'], () => {\r\n        menuButton.classList.remove('active');\r\n        menuList.classList.remove('active');\r\n      })\r\n    }\r\n  \r\n    menuButton.addEventListener('click', openMenu)\r\n  } \r\n  \r\n}\r\n\r\n\n\n//# sourceURL=webpack://animals/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showModal)\n/* harmony export */ });\nfunction showModal() {\r\n  const btnAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const btnFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  if (btnAbrir && btnFechar && modalContainer) {\r\n    function toggleModal(event) {\r\n      event.preventDefault();\r\n      modalContainer.classList.toggle(\"ativo\");\r\n    }\r\n\r\n    function outclickModal(event) {\r\n      if (event.target === this) {\r\n        toggleModal(event);\r\n      }\r\n    }\r\n\r\n    btnAbrir.addEventListener(\"click\", toggleModal);\r\n    btnFechar.addEventListener(\"click\", toggleModal);\r\n    modalContainer.addEventListener(\"click\", outclickModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/nav-tab.js":
/*!*******************************!*\
  !*** ./js/modules/nav-tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll(\".js-tabMenu li\");\r\n  const tabContent = document.querySelectorAll(\".js-tabContent section\");\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n\r\n    function navigatorTab(index) {\r\n      tabContent.forEach((item) => item.classList.remove(\"ativo\"));\r\n      tabContent[index].classList.add(\"ativo\");\r\n    }\r\n\r\n    tabMenu.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        navigatorTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/nav-tab.js?");

/***/ }),

/***/ "./js/modules/scrollToView.js":
/*!************************************!*\
  !*** ./js/modules/scrollToView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initScrollToView: () => (/* binding */ initScrollToView)\n/* harmony export */ });\nfunction initScrollToView() {\r\n  const linksInterno = document.querySelectorAll('.js-menu a[href^=\"#\"]');\r\n  if (linksInterno.length) {\r\n    function smoothNav(event) {\r\n      event.preventDefault();\r\n      const href = this.getAttribute(\"href\");\r\n      const sectionScrolled = document.querySelector(href);\r\n      sectionScrolled.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    }\r\n\r\n    linksInterno.forEach((link) => {\r\n      link.addEventListener(\"click\", smoothNav);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/scrollToView.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  function createToolTipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver(event) {\r\n    const map = this;\r\n    const tooltipBox = createToolTipBox(map);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    map.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.mapElement = map;\r\n    map.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.mapElement.removeEventListener(\"mousemove\", onMouseMove);\r\n      this.mapElement.removeEventListener(\"mouseleave\", onMouseLeave);\r\n    },\r\n  };\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = event.pageY + 20 + \"px\";\r\n      this.tooltipBox.style.left = event.pageX + 20 + \"px\";\r\n    },\r\n  };\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animals/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollToView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollToView.js */ \"./js/modules/scrollToView.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_nav_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav-tab.js */ \"./js/modules/nav-tab.js\");\n/* harmony import */ var _modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animaScroll.js */ \"./js/modules/animaScroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_businessHour_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/businessHour.js */ \"./js/modules/businessHour.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n//Navegação por Tab\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scrollToView_js__WEBPACK_IMPORTED_MODULE_0__.initScrollToView)();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_nav_tab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_businessHour_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://animals/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;