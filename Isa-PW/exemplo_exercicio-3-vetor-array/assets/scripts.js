const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const input = document.querySelector("#searchInput");
const button = document.querySelector("#searchButton");
const message = document.querySelector(".message");
const tabela = document.querySelector("#tableBody");


numbers.forEach((e,i) => {
    tabela.innerHTML += `<tr><td>${i}</td> <td>${e}</td></tr>`;
});

button.addEventListener("click", () => {
    const result = numbers.indexOf(parseInt(`${input.value}`));
    message.innerHTML = `Número encontrado na posição ${result}`;
   
    if(result == -1){
        message.innerHTML = `Número não encontrado...`;
    }
});

