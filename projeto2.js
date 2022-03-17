const prompt = require("prompt-sync")();
//LISTA DE OPÇÕES
let opcoes = ["pedra", "papel", "tesoura"];
let jogador = +prompt(
  "Para selecionar sua opção digite o numero: [0]-Pedra,[1]-Papel,[2]-Tesoura"
);
//VALIDAÇÃO DA OPÇÃO DO JOGADOR
while (jogador != 0 && jogador != 1 && jogador != 2) {
  console.log("Insira uma opção valida");
  jogador = +prompt(
    "Para selecionar sua opção digite o numero: [0]-Pedra,[1]-Papel,[2]-Tesoura"
  );
}
//OPÇÃO VADIDADA E SELECIONADA
let selecionadoUsuario = opcoes[jogador];

//OPÇÃO DO COMPUTADOR(NPC)
let numAleatorio = Math.trunc(Math.random() * 3);
let computador = opcoes[numAleatorio];

let escolhaJogadorePc = console.log(
  `o Jogador escolheu ${selecionadoUsuario}, e o NPC escolheu ${computador}`
);
//RESULTADOS POSSÍVEIS, CASO A ESCOLHA DO JOGADOR SEJA PEDRA
if (jogador == 0 && numAleatorio == 1) {
  console.log("Papel ganha de Pedra, O NPC Ganhou!");
} else if (jogador == 0 && numAleatorio == 2) {
  console.log("Pedra ganha de Tesoura, Você Ganhou!");
} else if (jogador == 0 && numAleatorio == 0) {
  console.log("Pedra e Pedra dar empate, Você e o NPC Empataram!");
}
//RESULTADOS POSSÍVEIS CASO A ESCOLHA DO JOGADOR SEJA PAPEL
if (jogador == 1 && numAleatorio == 0) {
  console.log("Papel ganha de Pedra, Você Ganhou!");
} else if (jogador == 1 && numAleatorio == 2) {
  console.log("Tesoura ganha de Papel, o NPC Ganhou!");
} else if (jogador == 1 && numAleatorio == 1) {
  console.log("Papel e Papel dar empate, Você e o NPC Empataram!");
}
//RESULTADOS POSSÍVEIS CASO A ESCOLHA DO JOGADOR SEJA TESOURA
if (jogador == 2 && numAleatorio == 0) {
  console.log(" Pedra ganha de Tesoura, O NPC Ganhou!");
} else if (jogador == 2 && numAleatorio == 1) {
  console.log("Tesoura ganha de Papel, Você Ganhou!");
} else if (jogador == 2 && numAleatorio == 2) {
  console.log("Tesoura e Tesoura dar empate, Você e o NPC Empataram!");
}
