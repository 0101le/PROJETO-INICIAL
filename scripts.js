var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

function alertar (event){
  alert("você clicou no botão!!" + " " + nome.value);

  var numero = 6;
  var resultado = numeroo / 2;
  if(resultado == 0){
    alert("este numero é par!");
  }
}