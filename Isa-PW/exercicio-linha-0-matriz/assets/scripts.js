const tabela = [
  [1, 10, 20, 30],
  [2, 11, 21, 31],
  [3, 12, 22, 32],
];

const tr = document.querySelector("tr");

for (let l = 0; l <= 0; l++) {
  for (let c = 0; c < 4; c++) {
    tr.innerHTML += `<td>${tabela[l][c]}</td>`;
  }
}