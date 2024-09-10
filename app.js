function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Cria o HTML para cada item do resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.link} target="_blank">${dado.titulo}</a>
          </h2>
          <p>${dado.subtitulo}</p>
          <p class="descricao-meta"> ${dado.descricao}</p>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção de resultados com os resultados gerados
    section.innerHTML = resultados;
  }