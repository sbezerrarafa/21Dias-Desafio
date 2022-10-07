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


function getPassword8() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

  var password1 = "";
  for (var i = 0; i < 8; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password1 += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById('senha8').value = password1
}

