{
  const criarHTML = (dados) => {
    const div = document.createElement('div');

    div.classList.add('dinamicContent');

    div.innerHTML = `<section class="dinamicContent__section">
    <img class="dinamicContent__img" src="${dados.img}"
          alt="">
        <div class="dinamicContent__boxDesc l-flex">
            <div class="dinamicContent__boxDesc__text l-flex">
              <h3 class="dinamicContent__title">${dados.title}</h3>
              <h4 class="dinamicContent__category">${dados.category}</h4>
              <span class="dinamicContent__date">${dados.date}</span>
              <div class="dinamicContent__badge">
                <span class="${dados.badgeClass}">${dados.badgeName}</span>
              </div>
            </div>
            <div class="dinamicContent__boxDesc__btn l-flex">
              <button class="btn-select">
                <input type="checkbox" id="${dados.checkItem}">
                <label for="${dados.checkItem}"></label>
              </button>
            </div>
        </div>
    </section>`;
    return div;
  };


  async function conteudoDinamico(url) {
    const dadosResponse = await fetch(url);
    const dadosJSON = await dadosResponse.json();

    const mainContent = document.querySelector('.dinamicContent-box');

    dadosJSON.forEach((dado) => {
      const divDados = criarHTML(dado);

      mainContent.appendChild(divDados);
    });
  }
  conteudoDinamico('./dinamicContent.json');
}
