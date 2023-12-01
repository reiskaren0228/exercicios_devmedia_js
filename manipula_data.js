const readline = require("readline-sync");

const nomeUsuario = readline.question("Informe seu nome: ");

const dataUltimoAcesso = new Date("2023/11/09 18:06:00");
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundoHora = 1000 * 60 * 60;
const milissegundoDia = milissegundoHora * 24;

let msg = "";

if (hora < 6 || hora >= 18) {
  msg = `\nBoa Noite ${nomeUsuario} !!!\n`;
} else if (hora >= 6 || hora >= 12) {
  msg = `\nBom Dia ${nomeUsuario} !!!\n`;
} else {
  msg = `\nBom Tarde ${nomeUsuario} !!!\n`;
}

if (diferencaTime > milissegundoDia) {
  msg += " *** Você está ausente há dias!!! *** \n";
} else if (diferencaTime > milissegundoHora) {
  msg += " *** Vcoê está ausente há horas!!! *** \n";
} else {
  msg += " *** Que bom que ainda está aqui !! *** \n";
}

console.log(msg);
