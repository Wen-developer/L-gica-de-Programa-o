"use strict";

// EXERCÍCIO 0 - ANTES DE MAIS NADA, IMPLEMENTE ESTA FUNÇÃO.
/**
 * Função que retorna um Array contendo os nomes dos alunos que fizeram este exercício.
 * @return {Array} Os nomes dos alunos que fizeram este exercício.
 */
function nomesDosAlunos() {
  return ["Wendell Santos Alves", "Matheus Costa Lisboa", "Abilio Gonçalves Vieira Filho", "Igor Felipe Jordão Rodrigues", "Luis Felipe Barbosa Tomaz"];
}

// Implemente as funções abaixo, conforme pede o enunciado.
// Carregue o arquivo ado1.html para ver os resultados e a sua nota.

// EXEMPLO 1.
/**
 * Função que recebe dois números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @return {number} O resultado da operação.
 */
function maiorDosDois(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// EXEMPLO 2.
/**
 * Função que recebe dois números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @return {number} O resultado da operação.
 */
function maiorDosDoisSimplificado(a, b) {
  return a > b ? a : b;
}

// EXERCÍCIO 1.
/**
 * Função que recebe quatro números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @param {number} c O terceiro número.
 * @param {number} d O quarto número.
 * @return {number} O resultado da operação.
 */
function maiorDosQuatro(a, b, c, d) {
  if (a > b && a > c && a > d) {
    return a;
  } else if (b > a && b > c && b > d) {
    return b;
  }
  else if (c > a && c > b && c > d) {
    return c;
  }
  else {
    return d;
  }
}

// EXERCÍCIO 2.
/**
 * Função que recebe uma operação em formato de texto e devolve o resultado desta operação com os dois números passados,
 * na ordem em que eles foram passados. (Use as funções do Math se necessário).
 *
 * As operações são identificadas da seguinte maneira:
 *  - A: Adição - Soma numero1 com numero2
 *  - S: Subtração - Subtrai numero2 do numero1
 *  - M: Multiplicação - Multiplica numero1 com numero2
 *  - D: Divisão - Divide numero1 pelo numero2
 *  - P: Potência - Eleva o numero1 pelo numero2
 *
 * Verifique onde é possível fazer a operação.
 * Nos casos em que não for definido, retornar NaN (not-a-number). São esses os casos:
 *  - Divisão por zero
 *  - Zero elevado a zero
 *  - Zero elevado a número negativo
 *  - Número negativo elevado a potência não-inteira
 *
 * Se a operação passada não for uma das letras acima, retornar undefined.
 * Ah, as letras sempre devem ser maiúsculas. Em caso de minúsculas (ou símbolos, ou palavras com várias letras,
 * ou qualquer outra coisa), retorne undefined também.
 *
 * @param {String} operacao A letra que identifica a operação a ser realizada.
 * @param {number} numero1 O primeiro operando.
 * @param {number} numero2 O segundo operando.
 * @return {number} O resultado da operação.
 */
function operacoesBasicas(operacao, numero1, numero2) {
  if (operacao != "A" && operacao != "S" && operacao != "M" && operacao != "D" && operacao != "P") {
    return undefined;
  }
  else if (operacao == "A") {
    return numero1 + numero2;
  }
  else if (operacao == "S") {
    return numero1 - numero2;
  }
  else if (operacao == "M") {
    return numero1 * numero2;
  }
  else if ((operacao == "D") && (numero1 > 0 || numero2 > 0)) {
    if (numero2 <= 0) {
      return NaN;
    }
    return numero1 / numero2;

  }
  else if ((operacao == "P") && (numero2 >= 0) || (numero2 % 1 == 0)) {
    if ((numero1 <= 0) && (numero2 <= 0)) {
      return NaN;
    }
    return numero1 ** numero2;

  }
}

// EXERCÍCIO 3.
/**
 * Escreva uma função que recebe dois elementos e retorna uma mensagem dizendo se eles são estritamente iguais,
 * equivalentes ou diferentes, com o seu tipo entre parênteses logo após o valor.
 *
 * Seguem os exemplos:
 *   - comparadorBasico(2, 1): "Elemento 2 (number) é diferente do elemento 1 (number)."
 *   - comparadorBasico("ABC", "ABC"): "Elemento ABC (string) é estritamente igual ao elemento ABC (string)."
 *   - comparadorBasico("2", 2): "Elemento 2 (string) é equivalente ao elemento 2 (number)."
 *   - comparadorBasico(new Cliente(), new Fornecedor()): "Elemento [object Object] (Cliente) é diferente do elemento [object Object] (Fornecedor)."
 *
 * Dica: Use a função auxiliar determinarTipo que está no arquivo utils.js.
 *
 * @param {*} elemento1 O primeiro operando.
 * @param {*} elemento2 O segundo operando.
 * @returns {String} A mensagem com o resultado da comparação.
 */
function comparadorBasico(elemento1, elemento2) {
  let tipo1 = determinarTipo(elemento1);
  let tipo2 = determinarTipo(elemento2);

  if (elemento1 === elemento2) {
    return "Elemento " + elemento1 + " (" + tipo1 + ")" + " é estritamente igual ao elemento " + elemento2 + " (" + tipo2 + ").";
  }

  else if (elemento1 == elemento2) {
    return "Elemento " + elemento1 + " (" + tipo1 + ")" + " é equivalente ao elemento " + elemento2 + " (" + tipo2 + ").";
  }

  else {
    return "Elemento " + elemento1 + " (" + tipo1 + ")" + " é diferente do elemento " + elemento2 + " (" + tipo2 + ").";
  }
};

// EXERCÍCIO 4.
/**d
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas)
 * e devolve o primeiro nome.
 *
 * Exemplos:
 *  - Victor Stafusa -> Victor
 *  - João Silva -> João
 *  - Maria -> Maria
 *
 * @param {String} nomeCompleto Nome completo da pessoa.
 * @return {String} String com o primeiro nome apenas.
 */
function primeiroNome(nomeCompleto) {
  const nomeArray = nomeCompleto.split(" ");
  return nomeArray[0];
}

// EXERCÍCIO 5.
/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas)
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado,
 * retorne-o da mesma forma que o recebeu.
 *
 * Exemplos:
 *  - Victor Stafusa -> Victor S.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 *
 * @param {String} nomeCompleto Nome completo da pessoa.
 * @return {String} String com o primeiro nome conforme dado e o segundo nome abreviado.
 */
function abreviadorNomes(nomeCompleto) {
  let nomes = nomeCompleto.split(' '); // quebrando a string em um array de nomes
  if (nomes.length === 1) { // se so houver um nome, retorna-lo sem alteracao
    return nomes[0];
  }
  let ultimoNome = nomes[nomes.length - 1]; // pegando o ultimo nome do array
  let primeiraLetra = ultimoNome.charAt(0).toUpperCase(); // pegando a primeira letra do ultimo nome e transformando em maiuscula
  let sobrenomeAbreviado = primeiraLetra + '.'; // criando a abreviacao do sobrenome
  return nomes[0] + " " + sobrenomeAbreviado; // juntando o array de nomes sem o ultimo nome e o sobrenome abreviado
}

// EXERCÍCIO 6.
/**
 * Escreva uma função que recebe uma string com uma data do calendário gregoriano no
 * formato brasileiro (dia/mês/ano) e determine se ela é válida.
 *
 * Para a data ser válida, ela tem que ter 4 dígitos no ano e 2 dígitos tanto no dia quanto no mês,
 * preenchidos com zeros à esquerda se for necessário.
 *
 * Lembre-se que alguns meses têm 30 dias e outros têm 31.
 * Fevereiro tem 28 dias em anos não bissextos e 29 em não-bissextos.
 * Quase todos os anos divisíveis por 4 são bissextos, mas existem 3 exceções a cada 400 anos, que são aqueles
 * divisíveis por 100, mas não por 400. Por exemplo, 1700, 1800, 1900, 2100 e 2200 não são anos bissextos.
 *
 * Embora o calendário gregoriano tenha sido instituído em 1582, considere como se fosse válido retroativamente
 * desde o ano 0001.
 *
 * @param {String} data String com a data no formato brasileiro (dia/mês/ano).
 * @return {boolean} Verdadeiro se a data for válida, falso em caso contrário.
 */
function dataValida(data) {
  let dataSplitada = data.split('/');
  let myRegex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
  let testeRegex = data.match(myRegex);
  if (!testeRegex) {
    return false;
  }
  let dia = parseInt(dataSplitada[0]);
  let mes = parseInt(dataSplitada[1]);
  let ano = parseInt(dataSplitada[2]);
  if (dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano < 1) {
    return false;
  }
  if (dia.length === 2 && mes.length === 2 && ano.length === 4) {
    return true;
  }
  if ([4, 6, 9, 11].includes(mes) && dia > 30) {
    return false;
  }
  if (mes === 2) {
    if (dia > 29) {
      return false;
    }
    else if (dia === 29 && !(ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0))) {
      return false;
    }
  }

  return true;

}

// EXERCÍCIO 7.
/**
 * Escreva uma função que recebe uma string com uma data do calendário gregoriano no
 * formato brasileiro (dia/mês/ano) e converta para o formato: "Dia de Nome-do-Mês-por-Extenso de Ano". 
 * Em caso de datas mal-formadas, devolva "Data inválida".
 *
 * Use a função desenvolvida no exercício anterior para decobrir se a data é ou não válida.
 *
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 *  - 31/02/2000 -> Data inválida
 *  - blablabla  -> Data inválida
 *
 * Observação: Note a letra maiúscula do mês.
 *
 * @param {String} data String com a data no formato brasileiro (dia/mês/ano).
 * @return {String} Data no formato "Dia de Nome-do-Mês-por-Extenso de Ano" ou "Data inválida".
 */
function converteDataParaFormaCompleta(data) {
  const validar = dataValida(data);
  var dataSplitada = data.split('/');
  var dia = dataSplitada[0];
  var mes = dataSplitada[1];
  var ano = dataSplitada[2];

  if (validar == false) {
    return "Data inválida"
  }
  else {
    switch (mes) {
      case "01": mes = " de Janeiro de "; break;
      case "02": mes = " de Fevereiro de "; break;
      case "03": mes = " de Março de "; break;
      case "04": mes = " de Abril de "; break;
      case "05": mes = " de Maio de "; break;
      case "06": mes = " de Junho de "; break;
      case "07": mes = " de Julho de "; break;
      case "08": mes = " de Agosto de "; break;
      case "09": mes = " de Setembro de "; break;
      case "10": mes = " de Outubro de "; break;
      case "11": mes = " de Novembro de "; break;
      case "12": mes = " de Dezembro de "; break;

    }
    return dia + mes + ano;
  }
}

// EXERCÍCIO 8.
/**
 * Escreva uma função que receba dois números inteiros positivos e devolva a soma de todos
 * os números pares entre os dois números (eles inclusive).
 * 
 * Exemplos:
 *  - 1 e 4 -> 2 + 4 = 6
 *  - 2 e 10 -> 2 + 4 + 6 + 8 + 10 = 30
 *  - 1 e 1 -> 0
 *  - 3 e 5 -> 4
 * @param {number} inicio O primeiro número.
 * @param {number} fim O segundo número.
 * @return {number} O somatório de valores pares entre os dois números, contando com eles.
 */
function somadorPares(inicio, fim) {
  let soma = 0;
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }
  return soma;
}

// EXERCÍCIO 9.
/**
 * Recebe um vetor de números e retorna o menor elemento do vetor.
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array<number>} vetor O vetor de números (nunca indefinido).
 * @return {number|undefined} O menor valor do vetor ou undefined se o vetor estiver vazio.
 */
function acharMenor(vetor) {
  if (vetor.length === 0) {
    return undefined;
  }
  let menorNumero = vetor[0];
  for (let i = 1; i <= vetor.length; i++) {
    if (vetor[i] < menorNumero) {
      menorNumero = vetor[i];
    }
  }
  return menorNumero;
}

// EXERCÍCIO 10.
/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array<number>} O vetor com números inteiros (nunca indefinido).
 * @return {Array<number>} O vetor contendo apenas números pares do original (ou vazio se não houver nenhum).
 */
function acharPares(vetor) {
  if (vetor.length === 0) {
    return vetor;
  }
  let vetorPar = [];
  for (let i = 0; i <= vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
      vetorPar.push(vetor[i]);
    }
  }
  return vetorPar;
}

// EXERCÍCIO 11.
/**
 * Escreva uma função que recebe um dicionário com os dados da pessoa, calule o IMC dela colocando o valor obtido
 * na propriedade IMC deste objeto e retorne uma string contendo o o estado do peso dessa pessoa.
 *
 * Fórmula do IMC:
 *    IMC = (massa em kg) / (altura em metros)²
 *
 * Tabela de estados do IMC:
 *  - Menor de 18,5 -> "Abaixo do peso"
 *  - Entre 18,5 e 24,9 -> "Normal"
 *  - Entre 25,0 e 29,9 -> "Excesso de peso"
 *  - Entre 30,0 e 34,9 -> "Obesidade leve (Grau I)"
 *  - Entre 35,0 e 39,9 -> "Obesidade severa (Grau II)"
 *  - Maior e igual a 40,0 -> "Obesidade mórbida (Grau III)"
 * 
 * @param {Object} pessoa Dicionário com dados da pessoa.
 * @param {String} pessoa.nome O nome da pessoa.
 * @param {number} pessoa.peso A massa da pessoa em kg.
 * @param {number} pessoa.altura A altura da pessoa em metros.
 * @return {String} Estado do peso da pessoa.
 */
function calcularImc(pessoa) {
  let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

  if (imc < 18.5) {
    return "Abaixo do peso";
  }
  else if (imc >= 18.5 && imc < 25) {
    return "Normal";
  }
  else if (imc >= 25 && imc < 30) {
    return "Excesso de peso";
  }
  else if (imc >= 30 && imc < 35) {
    return "Obesidade leve (Grau I)";
  }
  else if (imc >= 35 && imc < 40) {
    return "Obesidade severa (Grau II)";
  }
  else return "Obesidade mórbida (Grau III)";
}

// EXERCÍCIO 12.
/**
 * Escreva uma função que recebe uma frase e separe retorne um array com as palavras obtidas.
 *
 * Observação: Não se preocupe com a pontuação, vírgulas, ponto finais, pontos de exclamação e
 * outros caracteres de pontuação, ideogramas chineses, emojis, etc. nunca serão recebidos como parâmetro.
 *
 * @param {String} frase A frase a ser dividida em palavras.
 * @return {Array<String>} Um array com as palavras da frase.
 */
function obterPalavras(frase) {
  return frase.split(' ').filter(word => word !== "");
}


// EXERCÍCIO 13.
/**
 * Implemente uma função que recebe uma string e devolva essa mesma string codificada em Rot13.
 * Veja mais sobre essa forma de codificação em https://pt.wikipedia.org/wiki/ROT13
 * Mas basicamente é trocar A por N, B por O, C por P ... L por Y, M por Z, N por A, O por B, ... Y por L e Z por M.
 * Lembre-se que:
 * 1. Não altere caracteres com acentos, símbolos, números ou caracteres especiais.
 * 2. Uma letra maiúscula vai sempre se tornar uma outra letra maiúscula.
 * 3. Uma letra minúscula vai sempre se tornar uma outra letra minúscula.
 * 4. Chamar essa função duas vezes com rot13(rot13(algumaStringQualquer)) deve retornar sempre a string original.
 * 5. Isso não é uma forma de criptografia nem um pouco segura, mas serve para ofuscar spoilers de filmes e séries de
 *    forma que sejam legíveis apenas por aqueles que queiram lê-los. Por exemplo, aqui vai um spoiler codificado
 *    por esse método:
 *    Fancr zngn Qhzoyrqber. Znf an ireqnqr, Qhzoyrqber wá zbeerevn qr dhnydhre wrvgb r vffb sbv pbzovanqb rager
 *    ryrf cnen ratnane Ibyqrzbeg, dhr pbasvnin rz Fancr.
 * @param {String} texto O texto a ser transformado com rot13.
 * @return {String} O texto resultante da transformação com rot13.
 */
function rot13(texto) {
  let strCodificada = '';

  for (let i = 0; i < texto.length; i++) {

    let charASCII = texto.charCodeAt(i);

    if (charASCII >= 65 && charASCII <= 90) {
      strCodificada += String.fromCharCode((charASCII - 65 + 13) % 26 + 65);
    }
    else if (charASCII >= 97 && charASCII <= 122) {
      strCodificada += String.fromCharCode((charASCII - 97 + 13) % 26 + 97);
    }
    else {
      strCodificada += texto.charAt(i);
    }
  }
  return strCodificada;
}

// EXERCÍCIO 14.
/**
 * No HTML, existe uma <div id="rot13">.
 * Dentro desta <div> há dois <textarea>s.
 * Ao editar o primeiro <textarea>, esta função é automaticamente chamada. Ela deve fazer o seguinte:
 * 1. Ler o texto do primeiro <textarea>.
 * 2. Converter o texto lido em rot13 (use a função do exercício 13).
 * 3. Colocar o resultado no segundo <textarea>.
 */
function fazerRot13() {
  const entrada = document.getElementById("entra-rot13").value;
  let saida = rot13(entrada);
  document.getElementById("sai-rot13").value = saida;
}


// EXERCÍCIO 15.
/**
 * Escreva uma função que recebe os três lados de um triângulo e retorne qual tipo de triângulo é.
 *
 * Pode ser "Equilátero", "Isósceles" ou "Escaleno".
 *
 * Pode ainda ser "Não é um triângulo" quando um dos lados é igual ou maior que a soma dos outros dois
 * ou quando pelo menos um lado tem tamanho zero ou negativo.
 *
 * @param {number} a O tamanho do primeiro lado do triângulo.
 * @param {number} a O tamanho do segundo lado do triângulo.
 * @param {number} a O tamanho do terceiro lado do triângulo.
 * @return {String} O tipo de triângulo resultante.
 */
function tipoTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Não é um triângulo";
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Não é um triângulo";
  }
  if (a === b && b === c) {
    return "Equilátero";
  }
  if (a === b || a === c || b === c) {
    return "Isósceles";
  }
  return "Escaleno";;
}

// EXERCÍCIO 16.
/**
 * Use a fórmula de Heron para calcular a área de um triângulo a partir dos seus lados.
 * Se não for um triângulo, retorne undefined.
 *
 * Dica: Use a função do exercício anterior aqui para te ajudar.
 *
 * @param {number} a O tamanho do primeiro lado do triângulo.
 * @param {number} a O tamanho do segundo lado do triângulo.
 * @param {number} a O tamanho do terceiro lado do triângulo.
 * @return {number|undefined} A área do triângulo resultante ou undefined se não formar um triângulo.
 */
function areaTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return undefined;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return undefined;
  }
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

// EXERCÍCIO 17.
/**
 * No HTML, existe uma <div id="triangulo">.
 * Dentro desta <div> há três <input>s à esquerda de um <button> e um quarto e um quinto <input> à direita.
 *
 * Ao clicar neste <button>:
 * 1. Leia os valores dos primeiros três <input>s.
 * 2. Converta os valores lidos para valores numéricos (use a função lerNumero que já está aí, ela veio do utils.js).
 * 3. Utilize a função tipoTriangulo do exercício 15 para saber qual tipo de triângulo é o resultado disso.
 * 4. Utilize a função areaTriangulo do exercício 16 para saber qual é a área do triângulo.
 * 5. Coloque o nome do tipo de triângulo resultante na quarta <input>.
 * 6. Coloque a área do triângulo resultante na quinta <input>.
 *
 * Se a função lerNumero lançar um erro, coloque a mensagem de erro dela na quarta <input> e deixe a quinta em branco.
 *
 * Um esqueleto da implementação final já foi deixado pelo professor para ajudar.
 * Dica: Procure ver funções de manipulação de DOM nas partes que faltam (o que está como naoFizIssoAinda()).
 */

function verificarTriangulo() {
  // Comece a mexer no código daqui para baixo.
  let texto1, texto2;

  const inputs = document.querySelectorAll('.ex17 input');

  try {
    const a = lerNumero(inputs[0].value, { erro: "Informe o número A corretamente." });
    const b = lerNumero(inputs[1].value, { erro: "Informe o número B corretamente." });
    const c = lerNumero(inputs[2].value, { erro: "Informe o número C corretamente." });

    texto1 = tipoTriangulo(a, b, c);
    texto2 = areaTriangulo(a, b, c) || '';

    // Fazer algo com o texto2.
  } catch (e) {
    texto1 = e.message;
    texto2 = '';
    // Fazer algo aqui.
  }
  inputs[3].value = texto1
  inputs[4].value = texto2

  //naoFizIssoAinda();
}


// EXERCÍCIO 18.
/**
 * Escreva uma função que recebe um array com 52 cartas de baralho já devidamente embaralhado e
 * um array com 2 a 7 objetos representando jogadores de poker (uma das muitas variantes do jogo, existem várias).
 *
 * Distribua 5 cartas para cada jogador, mas sempre de forma a dar a primeira carta para o primeiro
 * jogador, a segunda para o segundo jogador e assim por diante. Após dar uma carta ao último jogador,
 * dá-se a carta seguinte novamente ao primeiro jogador, a posterior novamemente ao segundo e repete-se
 * isso até que cada jogador tenha suas 5 cartas. As cartas remanescentes (e apenas elas) devem permanecer
 * no array original.
 *
 * Cada carta é representada por um objeto no formato "valor-naipe", onde naipe é "♢", "♣", "♡" ou "♠" e o
 * valor é "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q" ou "K".
 *
 * Cada jogador é representado por um objeto no seguinte formato:
 * {"nome": (uma string), "cartas": (um array com cinco cartas)}
 * 
 * @param {Array<String>} cartas Um array com as cartas a serem distribuídas.
 *                                Ao término da função, restarão entre 17 e 42 cartas remanescentes neste array.
 * @param {Array<Object>} jogadores Um array com os jogadores que devem receber as cartas.
 */
function distribuirCartas(cartas, jogadores) {

  const numJogadores = jogadores.length;
  let proximoJogador = 0;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < numJogadores; j++) {
      const carta = cartas.shift();
      jogadores[j].cartas[i] = carta;

      proximoJogador = (proximoJogador + 1) % numJogadores;
    }
  }

  //naoFizIssoAinda();
}

// EXERCÍCIO 19.
/**
 * Escreva uma função que recebe um array com 2 a 7 objetos representando jogadores de poker, no mesmo formato
 * do exercício 18, mas já com as cartas devidamente recebidas, e retorne o nome do jogador que tem o ás de ouros.
 * Se ninguém estiver com o ás de ouros, retorne null.
 *
 * @param {Array<Object>} jogadores Um array com os jogadores, cada um com 5 cartas.
 * @return {String|undefined} O nome do jogador com o ás de ouros ou undefined se ninguém tiver o ás de ouros.
 */
function asDeOuros(jogadores) {

  let resultado = null;

  for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];

    for (let j = 0; j < jogador.cartas.length; j++) {
      const carta = jogador.cartas[j];

      if (carta === "A-♢") {

        resultado = jogador.nome;
      }
    }
  }
  return resultado;

  //naoFizIssoAinda();  INCOMPLETA
}

// EXERCÍCIO 20.
/**
 * Escreva uma função que recebe um array com 2 a 7 objetos representando jogadores de poker, no mesmo formato
 * dos exercícios 18 e 19 e determine se todos eles têm alguma carta real (J, Q ou K).
 *
 * Dica: Lembre-se dos métodos every e some dos arrays. 
 *
 * @param {Array<Object>} jogadores Um array com os jogadores, cada um com 5 cartas.
 * @return {boolean} Verdadeiro se todos tiverem alguma carta real na mão, falso se algum não tiver.
 */
function todosTemCartasReais(jogadores) {

  const cartasReais = new Set(['J', 'Q', 'K']);

  return jogadores.every(jogador => {
    return jogador.cartas.some(carta => {
      const valor = carta.split('-')[0];
      return cartasReais.has(valor);
    });
  });


  //naoFizIssoAinda();
}

// EXERCÍCIO 21.
/**
 * Escreva uma função que recebe um array com 5 cartas de baralho correspondendo às cartas que algum jogador tem
 * em sua mão (no mesmo formato exercícios 18, 19 e 20) e determine se existem pelo menos 3 cartas com o mesmo valor.
 *
 * Observação 1: Não existem duas cartas iguais no baralho. Isso só poderia acontecer se algum dos jogadores estivesse
 * trapaceando, mas considere que todos são sempre honestos.
 *
 * @param {Array<String>} cartas Um array com as 5 cartas.
 * @return {boolean} Verdadeiro se houverem pelo menos 3 cartas com o mesmo valor na mão, falso em caso contrário.
 */
function existeTrinca(cartas) {

  const valores = cartas.map(carta => carta.split('-')[0]); // extrai os valores das cartas
  for (let i = 0; i < valores.length; i++) {
    const valor = valores[i];
    const qtde = valores.filter(v => v === valor).length; // conta quantas vezes o valor aparece
    if (qtde >= 3) { // se aparecer pelo menos 3 vezes, retorna true
      return true;
    }
  }
  return false; // caso contrário, retorna false
  //naoFizIssoAinda();
}

// EXERCÍCIO 22.
/**
 * Escreva uma função que recebe uma frase e retorne um objeto (chave-valor) onde as chaves são as palavras e o
 * valor é o número de vezes que cada palavra aparece na frase.
 *
 * Observação 1: Não se preocupe com a pontuação, vírgulas, ponto finais, pontos de exclamação e
 * outros caracteres de pontuação, ideogramas chineses, emojis, etc. nunca serão recebidos como parâmetro.
 *
 * Observação 2: Palavras em maiúsculas devem ser consideradas iguais a palavras em minúsculas.
 * As palavras no objeto do resultado devem estar todas em letras minúsculas.
 *
 * Dica: Chame a função obterPalavras do exercício 12 como parte da solução desde exercício.
 *
 * @param {String} frase A frase da qual deseja se obter a contagem de palavras.
 * @return {Object} Um objeto onde as chaves são palavras da frase e os valores são o número de ocorrências na frase.
 */
function contarPalavras(frase) {

  // obter um array com todas as palavras da frase
  const palavras = obterPalavras(frase);

  // criar um objeto vazio para armazenar as contagens
  const contagem = {};

  // iterar sobre as palavras e atualizar a contagem de cada uma
  for (let palavra of palavras) {
    // converter a palavra para letras minúsculas, para evitar duplicidades
    palavra = palavra.toLowerCase();

    // atualizar a contagem da palavra no objeto
    contagem[palavra] = (contagem[palavra] || 0) + 1;
  }

  // retornar o objeto com as contagens
  return contagem;

  //naoFizIssoAinda();
}

// EXERCÍCIO 23.
/**
 * Use a fórmula de Bhaskara para calcular as raízes da equação ax² + bx + c = 0.
 * Se a for 0, retorne undefined, pois isso não seria uma equação do segundo grau.
 * Se houverem raízes reais, retorne um array com essas duas raízes, a menor primeiro e a maior depois.
 * Se não houverem raízes reais, retorne um array vazio.
 *
 * @param {number} a O termo quadrático da expressão de segundo grau.
 * @param {number} b O termo linear da expressão de segundo grau.
 * @param {number} c O termo constante da expressão de segundo grau.
 * @return {Array<number>|undefined} Um array com as soluções reais ou undefined se não for uma equação de segundo grau.
 */
function bhaskara(a, b, c) {

  if (a === 0) {
    return undefined;
  }
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return [];
  }
  const x1 = (-b - Math.sqrt(delta)) / (2 * a);
  const x2 = (-b + Math.sqrt(delta)) / (2 * a);
  return [Math.min(x1, x2), Math.max(x1, x2)];
  //naoFizIssoAinda();
}

// EXERCÍCIO 24.
/**
 * Crie uma função que receba um dicionário (objeto com chave-valor) onde cada chave corresponde ao nome de um time
 * de futebol o valor é um outro objeto com os campos "vitorias", "empates", "derrotas" e "saldo-de-gols".
 *
 * Retorne um array contendo os nomes dos times de acordo com a classificação no campeonato, com os que tiverem maior
 * número de pontos primeiro (cada vitória = 3 pontos, cada empate = 1 ponto, cada derrota = 0 pontos).
 * Caso haja empate no número de pontos, use o saldo de gols como critério de desempate.
 * Persistindo o empate, use a ordem alfabética do nome do time para ordená-los na classificação.
 *
 * Dica: Os operadores < ou > também podem ser usados para classificar strings em ordem alfabética. Por eemplo,
 * "Flamengo" < "Grêmio" resulta em true e "Bahia" > "Vasco" resulta em false.
 *
 * Dica: Use o método sort de array passando como parâmetro, um lambda com dois parâmetros.
 *
 * @param {Object} times O dicionário contendpo os nomes dos times e o respectivo número de pontos e saldo de gols.
 * @return {Array<string>} Um array com os times na ordem de classificação, do campeão ao lanterna.
 */

function classificacao(times) {
  const resultado = [];
  // Converter o objeto times em um array de objetos com nome do time, pontos e saldo de gols
  const campeonato = Object.entries(times).map(([nome, { vitorias, empates, derrotas, "saldo-de-gols": saldo }]) => ({
    nome,
    pontos: 3 * vitorias + empates,
    saldo,
  }));
  // Ordenar o array campeonato em ordem crescente de pontos e saldo de gols
  campeonato.sort((time1, time2) => {
    if (time1.pontos !== time2.pontos) {
      return time1.pontos - time2.pontos;
    }
    if (time1.saldo !== time2.saldo) {
      return time1.saldo - time2.saldo;
    }
    return time1.nome.localeCompare(time2.nome);
  });
  // Extrair apenas os nomes dos times do array campeonato
  return campeonato.map(({ nome }) => nome);
}




//naoFizIssoAinda();
// EXERCÍCIO 25.
/**
 * Esta função recebe um array com várias opções acerca de como você deve fazer a entrega deste AC.
 *
 * Retorne um outro array com dois elementos que contenha os dois índices das duas opções corretas dentre as várias
 * fornecidas. Lembrando que o primeiro elemento tem o índice 0, o segundo o índice 1, o terceiro o índice 2 e assim
 * por diante.
 *
 * Leia atentamente todos os enunciados aqui e no GitHub para saber quais são as opções corretas, principalmente o
 * README.md.
 *
 * Dica: Use o console.log para ver o que é recebido no array.
 *
 * @param {Array<string>} array Várias possibilidades de como fazer a entrega deste AC.
 * @returns {Array<string>} As opções corretas de entrega.
 */
function comoFazerEntrega(array) {

  const opcao1Index = array.findIndex((opcao) =>
    opcao.includes("Eu vou entregar o meu arquivo ado1.js que eu alterei e nada mais.")
  );

  const opcao2Index = array.findIndex((opcao) =>
    opcao.includes("Eu vou fazer no Git e enviar o link para o professor.")
  );

  const indexes = [opcao1Index, opcao2Index];
  indexes.sort((a, b) => a - b);
  return indexes;

  //naoFizIssoAinda();
}