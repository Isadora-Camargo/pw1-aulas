const button = document.querySelector("button");
const div = document.querySelector("div");
let cont = 0;

function contClick() {
  if (cont % 2 != 0) {
    button.textContent = `Você clicou ${++cont} vezes, PAR`;
    div.textContent = `Contador: ${cont}, PAR`;
  } else {
    button.textContent = `Você clicou ${++cont} vezes, ÍMPAR`;
    div.textContent = `Contador: ${cont}, ÍMPAR`;
  }
}

button.addEventListener("click", contClick);

//selecionar o elemento
//evento necessário (ex: "click")
//criar a função e chamá-la
