let vezes = Number(window.prompt("Informe quantos itens deseja: "));

for (let i = 1; i <= vezes; i++) {
  // document.querySelector("#list").innerHTML =
  //   document.querySelector("#list").innerHTML + `<li>Item ${i}</li>`;
  document.querySelector("#list").innerHTML += `<li>Item ${i}</li>`;
  // i muda a cada volta, começando com 1
  //+= mesma função que o código comentado. soma o que já tem com o que há dps do =.
  // com += para de sobrescrever/substituir
}
