const form = document.getElementById("form-publicar-nota");
//const tabela = document.getElementById("quadro-notas");

form.addEventListener("submit", (event) => {
  const tabela = document.getElementById("quadro-notas");

  event.preventDefault();
  const nome = form.elements["nome-aluno"];
  const matricula = form.elements["matricula-aluno"];
  const avaliacao1 = form.elements["av-1"];
  const avaliacao2 = form.elements["av-2"];
  const nota = form.elements["nota-aluno"];

  const numeroLinhas = tabela.rows.length;
  const linha = tabela.insertRow(numeroLinhas);
  const celula1 = linha.insertCell(0);
  const celula2 = linha.insertCell(1);
  const celula3 = linha.insertCell(2);
  celula1.innerHTML = `${nome.value}`;
  celula2.innerHTML = `${matricula.value}`;
  celula3.innerHTML = `${nota.value}`;

  //console.log(nome.value);
});

function checkedAv() {
  //   const avaliacao1 = form.elements["av-1"];
  //   const avaliacao2 = form.elements["av-2"];
  //   if (avaliacao1.checked) {
  //     avaliacao2.setAttribute("disabled", true);
  //   } else if (avaliacao2.checked) {
  //     avaliacao1.setAttribute("disabled", true);
  //   } else if (!avaliacao1.checked || !avaliacao2.checked) {
  //     avaliacao2.removeAttribute("disabled");
  //     avaliacao1.removeAttribute("disabled");
  //   }
}
