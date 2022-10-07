// $('.btn-carrinho').click(function () {
//   $('#carrinho').addClass('active-carrinho');
// });

var cont = 0;
var disp = document.getElementById("display");
var btn = document.getElementById('btn-carrinho')


function myFunction() {
  console.log('entrou');
  cont++;
  $('.fn-carrinho').text(cont);
};


document.addEventListener("keydown", function (event) {
  const tecla = event.key

  $("#digitado").text(tecla)
})