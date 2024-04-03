const numbers = [];

const input = document.querySelector("#numberInput");
const button = document.querySelector("#addButton");
const p = document.querySelector("#vectorOutput");

button.addEventListener("click", () => {
    numbers.push(input.value); 
    p.innerHTML += `<span> ${numbers[numbers.length - 1]} </span>`; 
})