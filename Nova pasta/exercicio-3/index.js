function adicionarItem() {
  const input = document.getElementById("item-compra");
  const lista = document.getElementById("lista-compra");

  if (input.value !== "") {
    lista.innerHTML += `<li>${input.value}</li>`;
    input.value = ""
  }
}
