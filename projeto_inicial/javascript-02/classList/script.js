const titulo = document.querySelector("h2")
titulo.style.color = "blue"
titulo.style.fontSize = "2.5rem"

const botton = document.querySelector("button")
botton.style.color = "white"
botton.style.fontSize = "1rem"
botton.style.background = "green"
botton.style.borderRadius = "15px"
botton.style.font = "italic bold 1rem arial,serif";

const inputUsuario = document.getElementById("login-usuario")
inputUsuario.classList.add("correct")

const textError = document.getElementsByClassName("error-text")
    textError[1].classList.add("visible")

const inputPassword = document.getElementById("login-senha")
    inputPassword.classList.remove("correct")
    inputPassword.classList.add("error")

const nameUsuario = document.querySelectorAll("label")
    nameUsuario[0].style.font = "italic bold 1rem arial,serif";

const numberPassword = document.querySelectorAll("label")
    numberPassword[1].style.font = "italic bold 1rem arial,serif";

    