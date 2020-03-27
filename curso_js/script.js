// JS para o javascript.html
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

// JS para o formulario.html
function valida(){
  var nome = document.getElementById("nome");
  if (nome.value == '') {
    alert("Campo não pode estar em branco");
  } else {
    alert("Usuário registrado");
  }
}
