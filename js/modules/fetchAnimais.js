import animaNumeros from "./anima-numeros.js"

export default function fetchAnimais() {
  async function animaisJson(url) {
    const animaisResponse = await fetch(url)
    const animaisJSON = await animaisResponse.json()
    const sectionGrid = document.querySelector('.numeros-grid')
  
    animaisJSON.forEach(animal => {
      sectionGrid.appendChild(createAnimalDiv(animal))
    })
    animaNumeros()
  }
  
  function createAnimalDiv(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  
  animaisJson('../js/apis/animaisapi.json')
}


