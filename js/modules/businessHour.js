export default function businessHour() {

}

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horariosSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const diaDeFuncionamento = diasSemana.findIndex(dia => dia === diaAgora) !== -1
const horarioDeFuncionamento = (horarioAgora >= horariosSemana[0] && horarioAgora < horariosSemana[1])

if(diaDeFuncionamento && horarioDeFuncionamento) {
  funcionamento.classList.add('aberto')
}