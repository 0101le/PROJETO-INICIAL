var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var Endereço= document.getElementById("Endereço");

var Telefone = document.getElementById("Telefone");

var Cep= document.getElementById("Cep");

var Complemento = document.getElementById("complemento");

var Bairro = document.getElementById("Bairro");

var Estado = document.getElementById("Estado");

var saída = document.getElementById("saída de dados");




function alertar (event){
  //alert("você clicou no botão!!" + " " + nome.value);

  //var numero = 6;
 // var resultado = numero % / 2;
  //if(resultado == 0){
   // alert("este numero é par!");
  
  Saida.innerText = "nome: " + nome.value +
  "\n email: " + email.value + "\nEndereço: " + Telefone.value

}
