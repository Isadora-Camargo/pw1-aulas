const array = [];

for (let i = 0; i <= 99; i++) {
  const num = Math.random() * 1000;
  array.push(parseInt(num));
}
const primeiros = array.slice(0, 5);
const ultimos = array.slice(-5);
console.log(array);
console.log(primeiros);
console.log(ultimos);
