var report = [
  [9, 7, 6.5],
  [9.8, 9, 8.5],
];
const firts = document.querySelector("#first");
const second = document.querySelector("#second");

for (let l = 0; l <= 0; l++) {
  for (let c = 0; c <= 2; c++) {
    firts.innerHTML += `<td>${report[l][c]}</td>`;
  }
}
for (let l = 1; l <= 1; l++) {
  for (let c = 0; c <= 2; c++) {
    second.innerHTML += `<td>${report[l][c]}`;
  }
}
