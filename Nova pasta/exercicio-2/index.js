let cliques = 0;

function incrementarCliques() {
  //cliques += 1
  cliques++;
  const textoContador = document.getElementById("contador");
  textoContador.innerHTML = `N° de cliques: ${cliques}`
}
