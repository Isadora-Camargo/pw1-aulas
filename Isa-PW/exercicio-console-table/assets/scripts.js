const tabela = [
  [20, 30, 40, 50],
  [100, 200, 300, 400],
  [1, 2, 2, 4],
];

const table = document.querySelector("table");

for (let l = 0; l <= 2; l++) {
  const seila = document.createElement("tr");
  for (let c = 0; c <= 3; c++) {
    seila.innerHTML += `<td>${tabela[l][c]}</td>`;
  }
  table.insertAdjacentElement("beforeend", seila);
}
