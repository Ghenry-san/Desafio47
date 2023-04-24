function procuraEquipe() {
  const pesquisa = document.getElementById("pesquisa");
  const f = pesquisa.value.toUpperCase();
  const table = document.getElementById("corpotabela");
  const linhasTabela = table.getElementsByTagName("tr"); 

  for (i = 0; i < linhasTabela.length; i++) {
    td = linhasTabela[i].getElementsByTagName("td")[2]; 
    if (td) {
      if (td.textContent.toUpperCase().indexOf(f) > -1) {
        linhasTabela[i].style.display = "";
      } else {
        linhasTabela[i].style.display = "none"; 
      }
    }
  }
}

pesquisa.addEventListener("input", procuraEquipe); 
