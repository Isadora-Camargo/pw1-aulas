const li3 = document.createElement("li");
const li2 = document.createElement("li");
const li1 = document.createElement("li");
const ul = document.createElement("ul");
const spanl = document.createElement("span");
const spant = document.createElement("span");
const div = document.createElement("div");
const h1 = document.createElement("h1");

h1.textContent = "Disciplinas";
spant.textContent = "Informática";
li1.textContent = "PW I";
li2.textContent = "PW II";
li3.textContent = "Banco de Dados";

h1.setAttribute("id","title");
div.setAttribute("id","box");
spant.setAttribute("id","title");
spanl.setAttribute("id","content")
ul.setAttribute("id","list")

const body = document.querySelector("body");

body.insertAdjacentElement("afterbegin",h1);
body.insertAdjacentElement("beforeend",div);
div.insertAdjacentElement("afterbegin",spant);
spant.insertAdjacentElement("afterend",spanl);
spanl.insertAdjacentElement("afterbegin",ul);
ul.insertAdjacentElement("afterbegin",li3);
ul.insertAdjacentElement("afterbegin",li2);
ul.insertAdjacentElement("afterbegin",li1);




/*
let vezes = Number(window.prompt("Informe quantos itens deseja: "));
for (let i = 1; i <= vezes; i++) {
  // document.querySelector("#list").innerHTML =
  //   document.querySelector("#list").innerHTML + `<li>Item ${i}</li>`;
  document.querySelector("#list").innerHTML += `<li>Item ${i}</li>`;
  // i muda a cada volta, começando com 1
  //+= mesma função que o código comentado. soma o que já tem com o que há dps do =.
  // com += para de sobrescrever/substituir
}
*/
