const form = document.querySelector("form");
const name = document.querySelector("#name");
const birth = document.querySelector("#birth");
const address = document.querySelector("#address");
const divName = document.querySelector("#divName");
const divAge = document.querySelector("#divAge");
const divAdress = document.querySelector("#divAdress");
var age = 0;

function resultName() {
  divName.innerHTML = "Nome: " + name.value;
}
function resultBirth() {
  age = parseInt(birth.value.slice(0, 4));
  age = 2024 - age;
  divAge.innerHTML = "Idade: " + age;
}
function resultAdress() {
  divAdress.innerHTML = "Endereço: " + address.value;
}

name.addEventListener("input", resultName);
address.addEventListener("input", resultAdress);
birth.addEventListener("input", resultBirth);
