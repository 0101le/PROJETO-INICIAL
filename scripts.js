var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alertar (event){
  alert("você clicou no botão!!" + event)

  var numero = 6;
  var resultado = numeroo / 2;
  if(resultado == 0){
    alert("este numero é par!");
  }
}