function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
  document.getElementById('resultado').innerHTML = "";
}
function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else {
    document.getElementById('resultado').innerHTML = "Nada..."
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
const mesAtual = (document.getElementById('mes').innerHTML =
  mes[d.getMonth()]);
const diaAtual = (document.getElementById('dia-mes').innerHTML =
  d.getDate());