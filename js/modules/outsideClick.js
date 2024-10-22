export default function clickOutside(element, typeEvent, callback) {
  const html = document.documentElement;
  if (!element.hasAttribute('data-selected')) {
    element.setAttribute('data-selected', '');
    typeEvent.forEach((evt) => {
      html.addEventListener(evt, bubbleHhtmlEvent);
    })
  }
  function bubbleHhtmlEvent(event) {
    if (!element.contains(event.target)) {
      callback();
      element.removeAttribute('data-selected');
      typeEvent.forEach((evt) => {
        html.removeEventListener(evt, bubbleHhtmlEvent);
      })
    }
  }
}