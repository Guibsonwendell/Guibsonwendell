// const botao = document.getElementById("button-salvar");
// console.log(botao);

// const container = document.getElementById("main-container");
// console.log(container);

//container.innerHTML = "";
//container.innerHTML += "<p>Fui adicionado pelo JS :)</p>"
// container.innerHTML += "<div class='class-js'>div com classe criada pelo JS</div>"

// const botao = document.getElementsByClassName("botao");
// console.log(botao)
// console.log(botao[4])

// const botoes = document.querySelector(".botao")
// console.log(botoes)

function mouseOn() {
    console.log("Passou o mouse na div")
    const texto = document.getElementById("mouseEvent")
    texto.innerHTML = "Você está em cima da div"
}

function mouseOut() {
    console.log("Mouse saiu da div")
    const texto = document.getElementById("mouseEvent")
    texto.innerHTML = "Você saiu de cima da div"
}

function valorInput() {
    const input = document.getElementById("input-event")
    console.log(input.value)
    const itemLista = document.getElementById("lista-input")
    itemLista.innerHTML += `<li>${input.value}</li>`
    input.value = ""
}