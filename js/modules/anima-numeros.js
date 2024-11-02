export default class AnimaNumeros {
  constructor(numeros, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }
  static incrementaNumeros(numero) {
    const total = +numero.innerText;
    let start = 0;
    let incremento = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        clearInterval(timer);
        numero.innerHTML = total;
      }
    }, Math.random() * 35);
  }
  animaNumero() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementaNumeros(numero);
    });
  }
  handleMutation(event) {
    if (event[0].target.classList.contains("ativo")) {
      this.animaNumero();
      this.observerMutation.disconnect();
    }
  }
  initMutation() {
    this.observerMutation = new MutationObserver(this.handleMutation);
    this.observerMutation.observe(this.observerTarget, { attributes: true });
  }
  init() {
    this.initMutation();
    return this;
  }
}
