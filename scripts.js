var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var endereço= document.getElementById("endereço");

var telefone = document.getElementById("telefone");

var cep= document.getElementById("cep");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var estado = document.getElementById("estado");

var saída = document.getElementById("saída de dados");




function alertar (event){
  //alert("você clicou no botão!!" + " " + nome.value);

  //var numero = 6;
 // var resultado = numero % / 2;
  //if(resultado == 0){
   // alert("este numero é par!");

  const url = `https://viacep.com.br/ws/${cep.value}/json`;
  
  fetch(url)
  .then(function(resposta){
    return resposta.json();
  })

   .then(
    function(dadosDoEndereço){
      logradouro.value = dadosDoEndereco.logradouro;
      bairro.value = dadosDoEndereco.bairro;
      cidade.value = dadosDoEndereco.localidade;
      estado.value = dadosDoEndereco.uf;
      complemento.value = dadosDoEndereco.complemento;


    }
   )
   .catch(function (e){
    alert(e.message());

   });
  

  saida.innerText = "nome: " + nome.value +
  "\nemail: " + email.value + "\nendereço: " + endereço.value + "\ntelefone: " + telefone.value + "\ncep: " + cep.value + "\ncomplemento: " + complemento.value + "\nbairro: " + bairro.value + "\nestado: " + estado.value;

}
