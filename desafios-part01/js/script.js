function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
  document.getElementById('resultado').innerHTML = '';
}
function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1,
  );
}
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    document.getElementById('resultado').innerHTML = 'Nada...';
  }
}

// calendario

var d = new Date();
var semana = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
];
var mes = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

document.getElementById('dia-semana').innerHTML = semana[d.getDay()];
const ano = (document.getElementById('ano').innerHTML = d.getFullYear());
const mesAtual = (document.getElementById('mes').innerHTML = mes[d.getMonth()]);
const diaAtual = (document.getElementById('dia-mes').innerHTML = d.getDate());

// contador

// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     display.innerHTML = minutes + ':' + seconds;
//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }
// window.onload = function () {
//   var duration = 60 * 5; // Converter para segundos
//   display = document.querySelector('#timer').innerHTML =
//     minutos + ':' + segundos; // selecionando o timer
//   startTimer(duration, display); // iniciando o timer
// };
