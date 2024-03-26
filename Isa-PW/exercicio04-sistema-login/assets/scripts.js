const form = document.querySelector("form");
const email = document.querySelector("#email");
const senha = document.querySelector("#password");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value == "oioi@gmail.com") {
    if (senha.value == "underere123") {
      message.innerHTML = "Professor oioi logado com sucesso!";
    }
  }
  if (email.value != "oioi@gmail.com" || senha.value != "underere123") {
    message.innerHTML = "Email ou senha inválidos!";
  }
});
