export default function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]')
  function handleMutation(event) {
    if (event[0].target.classList.contains('ativo')) {
      numeros.forEach((numero) => {
        const total = +numero.innerText;
        let start = 0;
        let incremento = Math.floor(total / 100)
        const timer = setInterval(() => {
          start += incremento
          numero.innerText = start
          if (start > total) {
            clearInterval(timer)
            numero.innerHTML = total
          }
        }, Math.random() * 35)
      })
      observer.disconnect()
    }
  }
  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true })
}



