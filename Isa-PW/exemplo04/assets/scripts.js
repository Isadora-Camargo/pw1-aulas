const multVal01 = document.querySelector("#n1");
const multVal02 = document.querySelector("#n2");
const multResult = document.querySelector("#result");
//console.log(multVal01.value);

function mult() {
  var result = 0;
  result = parseInt(multVal01.value) * parseInt(multVal02.value); //parseInt transforma string em int
  if (isNaN(result)) {
    multResult.textContent = "Erro!";
  } else {
    multResult.textContent = result;
  }
}

multVal01.addEventListener("input", mult); //seleciona, monitora, e dispara a função criada
multVal02.addEventListener("input", mult);

const divVal01 = document.querySelector("#div01");
const divVal02 = document.querySelector("#div02");
const divResult = document.querySelector("#resultDiv");

function div() {
  var result = 0;
  result = parseInt(divVal01.value) / parseInt(divVal02.value);
  if (isNaN(result) || divVal02.value == 0) {
    divResult.textContent = "Erro!";
  } else {
    divResult.textContent = result;
  }
}

divVal01.addEventListener("input", div); //seleciona, monitora, e dispara a função criada
divVal02.addEventListener("input", div);

const sumVal01 = document.querySelector("#sum01");
const sumVal02 = document.querySelector("#sum02");
const sumResult = document.querySelector("#resultSum");

function sum() {
  var result = 0;
  result = parseInt(sumVal01.value) + parseInt(sumVal02.value);
  if (isNaN(result)) {
    sumResult.textContent = "Erro!";
  } else {
    sumResult.textContent = result;
  }
}

sumVal01.addEventListener("input", sum); //seleciona, monitora, e dispara a função criada
sumVal02.addEventListener("input", sum);

const subVal01 = document.querySelector("#sub01");
const subVal02 = document.querySelector("#sub02");
const subResult = document.querySelector("#resultSub");

function sub() {
  var result = 0;
  result = parseInt(subVal01.value) - parseInt(subVal02.value);
  if (isNaN(result)) {
    subResult.textContent = "Erro!";
  } else {
    subResult.textContent = result;
  }
}

subVal01.addEventListener("input", sub); //seleciona, monitora, e dispara a função criada
subVal02.addEventListener("input", sub);
