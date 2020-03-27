function mudaCor(cor){
  var elemento = document.getElementById("mensagem");
  elemento.style.backgroundColor = cor;
}

function aumenta(){
  var mudado = document.getElementById("tamanho");
  mudado.style.fontSize = "100px";
}

function diminui(){
  var elemento = document.getElementById("tamanho");
  elemento.style.fontSize = "10px";
}

function limpa_tamanho(){
  var elemento = document.getElementById("tamanho");
  tamanho.style = "clear";
}

function limpa_color(){
  var elemento = document.getElementById("mensagem");
  mensagem.style = "clear";
}
