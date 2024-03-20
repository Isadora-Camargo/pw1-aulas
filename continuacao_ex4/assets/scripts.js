const form = document.querySelector("form");
const email = document.querySelector("#email");
const senha = document.querySelector("#password");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value == "oioi@gmail.com") {
    if (senha.value == "underere123") {
      message.innerHTML = "Professor logado com sucesso!";
    }
  }
  if (email.value == "email2@gmail.com") {
    if (senha.value == "senha1234") {
      message.innerHTML = "Aluno logado com sucesso!";
    }
  }

  if (email.value != "oioi@gmail.com" && email.value != "email2@gmail.com") {
    message.innerHTML = "Email inválido!";
  }
  if (senha.value != "underere123" && senha.value != "senha1234") {
    message.innerHTML = "Senha inválida!";
  }
});
