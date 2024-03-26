const item = document.querySelector("#item");
const button = document.querySelector("#myButtonInsert");
const ul = document.querySelector("#myList");

button.addEventListener("click", () => {
  ul.innerHTML += `<li>${item.value}</li>`;
});
