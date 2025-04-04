document.addEventListener('DOMContentLoaded', function (){
let tamanhoAtualFonte = 1;

const botaoAumentarFonte = document.getElementsById('aumentar-fonte');
const botaoDiminuirFonte = document.getElementsById('diminuir-fonte');

  botaoAumentarFonte.addEventListener('click', function(){tamanhoAtualFonte +=0.1});
  document.body.style.fontSize = `${tamanhoAtualFonte}em`});

 botaoDiminuirFonte.addEventListener('click', function(){tamanhoAtualFonte -=0.1});
document.body.style.fontSize = `${tamanhoAtualFonte}em`});



});