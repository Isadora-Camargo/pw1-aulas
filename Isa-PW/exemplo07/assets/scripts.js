let name = window.prompt("Informe seu nome: ");
let age = Number(window.prompt("Informe sua idade: "));

document.querySelector(
  "#content"
).innerHTML = `Olá, ${name}! Seja bem-vindo. Sua idade é ${age}`;
