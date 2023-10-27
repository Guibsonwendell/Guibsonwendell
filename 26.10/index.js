const container = document.getElementById("meu-container")
console.log(container)
// container.innerHTML += "<p class='texto-azul'>Texto 1</p>"
// container.innerHTML += "<p class='texto-azul'>Texto 2</p>"
// container.innerHTML += "<p class='texto-azul'>Texto 3</p>"
// container.innerHTML += "<p class='texto-azul'>Texto 4</p>"
// container.innerHTML += "<p class='texto-azul'>Texto 5</p>"

for (let i = 1; i <= 5; i++) {
    container.innerHTML += `<p class='texto-azul'>Texto ${i}</p>`
}