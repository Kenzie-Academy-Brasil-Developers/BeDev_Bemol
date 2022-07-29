// Pegar um elemento pela classe
let h1 = document.getElementsByClassName("titulo")[0]

h1.innerText = "Hello World!"

//pegar um elemento pelo id

let p = document.getElementById("paragrafoKenzie")

p.innerText = "Kenzie Academy Brasil"

// querySelector
let span = document.querySelector("span")
span.innerText = 2022

// adicionar uma classe
span.className = "ano"

//remover uma classe
span.classList.remove("ano")

//adicionando um id
let h3 = document.querySelector("h3")
h3.id = "churros"

//remover um elemento html
// span.remove()

//criar elemento
let paragrafo2 = document.createElement("p")
paragrafo2.innerText = "Criando uma tag p"

let body = document.querySelector("body")
body.appendChild(paragrafo2)

// body.style.backgroundColor = "pink"

const button = document.createElement("button")
button.innerText = "Botão"
button.id = "button-com-id"
body.appendChild(button)

button.addEventListener("click", function() {
    button.innerText = "Clicado"
})

button.addEventListener("mouseenter", function() {
    button.innerText = "Mouse Entrou"
})

button.addEventListener("mouseout", function() {
    button.innerText = "Mouse saiu"
})
