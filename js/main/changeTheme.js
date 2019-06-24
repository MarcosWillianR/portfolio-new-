{
  const showButton = document.querySelector('[data-change="showBtn"]');
  const buttons = document.querySelectorAll('[data-change="btn"]');
  const listbtn = document.querySelector('[data-change="list-btn"]');
  const events = ['touchstart', 'click'];


  const { body } = document;

  const changeTheme = (event) => {
    const eventTarget = event.target.classList;

    // Todos os nomes das classes de temas
    const themeNames = ['t-light-red', 't-light-purple', 't-light-orange', 't-light-green', 't-light-blue', 't-dark-red', 't-dark-purple', 't-dark-orange', 't-dark-green', 't-dark-blue'];

    // Todos os nomes das classes dos botões
    const btnClass = ['light-purple', 'light-blue', 'light-green', 'light-orange', 'light-red', 'dark-purple', 'dark-blue', 'dark-green', 'dark-orange', 'dark-red'];

    // Se btnClass contiver o mesmo nome que existir na classe do EventTarget
    // Remove todos os nomes que estão na classe do body
    // e adciona a classe referente ao Target
    // depois para cada botão, remove a classe 'ativo'
    // e adiciona ela apenas para o Target.
    if (btnClass.includes(eventTarget.value)) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add(`t-${eventTarget.value}`);
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });
      eventTarget.add('active');
    }
  };

  const handleChangeThemeEvent = (event) => {
    event.preventDefault();
    showButton.classList.add('is-show');
    listbtn.classList.add('is-show');

    //  Ao clicar fora do container ul, remove a classe
    outsideEvent(listbtn, events, () => {
      showButton.classList.remove('is-show');
      listbtn.classList.remove('is-show');
    });

    // Para cada botão, ativa a função changeTheme
    events.forEach((userEvent) => {
      buttons.forEach((btn) => {
        btn.addEventListener(userEvent, changeTheme);
      });
    });
  };

  // Evento no primeiro botão, de mostrar o container
  events.forEach((userEvent) => {
    showButton.addEventListener(userEvent, handleChangeThemeEvent);
  });
}
