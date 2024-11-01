//o clickoutside funciona para regras que o element seja ele mesmo ou filhos,
//ao passar no primeiro parametro algo que não seja o this, ele sempre irá retornar
//false ao testar a expressão para ativar a função bubbleHtmlEvent

export default function clickOutside(element, typeEvent, callback) {
  const html = document.documentElement;
  if (!element.hasAttribute("data-selected")) {
    element.setAttribute("data-selected", "");
    typeEvent.forEach((evt) => {
      html.addEventListener(evt, bubbleHtmlEvent);
    });
  }
  function bubbleHtmlEvent(event) {
    if (!element.contains(event.target)) {
      callback();
      element.removeAttribute("data-selected");
      typeEvent.forEach((evt) => {
        html.removeEventListener(evt, bubbleHtmlEvent);
      });
    }
  }
}
