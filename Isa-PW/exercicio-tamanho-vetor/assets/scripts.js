const numbers = [];

const input = document.querySelector("#input");
const buttonInsert = document.querySelector("#insert");
const divCount = document.querySelector(".count");
const body = document.querySelector("body");

const div = document.createElement("div");
//const divRow = document.querySelector(".row");
//numbers.forEach((e, i) => {});

buttonInsert.addEventListener("click", () => {
   numbers.push(input.value);
    
    div.innerHTML += `<div class="row">índice: <span>${numbers.length}</span>Elemento: <span>${input.value}</span></div>`;
    body.insertAdjacentElement("beforeend", div);


    divCount.innerHTML = `Número de itens no vetor: ${numbers.length}`;
   });


