var valor;

function botao(num) { //funçao usada para concatenar os numeros no visor da calculadora
  valor = document.calculadora.tela.value += num;
}

function apaga() { //função usada para apagar a tela do visor da calculadora 
  document.calculadora.tela.value = '';
}

function resultado() { //funçao usada para fazer o calculo das operações e mostrar no visao do calculadora
  calculo = eval(valor) //a variavel calculo armazena o valor de retorno das operações, sendo assim se tiver outra variavel com o mesmo identificador pode ocasionar erros na execução do codigo!!
  document.calculadora.tela.value = calculo;
}

function somar() { //operador de adiçâo
  var adicao = "+";
  valor = document.calculadora.tela.value += adicao;
}

function multiplicar() { //operador de multiplicação
  var multiplicaçao = "*"
  valor = document.calculadora.tela.value += multiplicaçao;
}

function diminuir() { //operador de divisão
  var subtraçao = "-"
  valor = document.calculadora.tela.value += subtraçao;
}

function dividir() { //operador de divisão
  var divisao = "/"
  valor = document.calculadora.tela.value += divisao;
}