{
  const showButton = document.querySelector('[data-change="showBtn"]');
  const buttons = document.querySelectorAll('[data-change="btn"]');
  const listbtn = document.querySelector('[data-change="list-btn"]');
  const events = ['touchstart', 'click'];


  const { body } = document;

  const changeTheme = (event) => {
    const eventTarget = event.target.classList;

    const themeNames = ['t-light-red', 't-light-purple', 't-light-orange', 't-light-green', 't-light-blue', 't-dark-red', 't-dark-purple', 't-dark-orange', 't-dark-green', 't-dark-blue'];

    if (eventTarget.contains('light-purple')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-light-purple');
    } else if (eventTarget.contains('light-blue')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-light-blue');
    } else if (eventTarget.contains('light-green')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-light-green');
    } else if (eventTarget.contains('light-orange')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-light-orange');
    } else if (eventTarget.contains('light-red')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-light-red');
    } else if (eventTarget.contains('dark-purple')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-dark-purple');
    } else if (eventTarget.contains('dark-blue')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-dark-blue');
    } else if (eventTarget.contains('dark-green')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-dark-green');
    } else if (eventTarget.contains('dark-orange')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-dark-orange');
    } else if (eventTarget.contains('dark-red')) {
      themeNames.forEach((theme) => {
        body.classList.remove(theme);
      });
      body.classList.add('t-dark-red');
    }
  };

  const handleChangeThemeEvent = (event) => {
    event.preventDefault();
    showButton.classList.add('is-show');
    listbtn.classList.add('is-show');

    outsideEvent(listbtn, events, () => {
      showButton.classList.remove('is-show');
      listbtn.classList.remove('is-show');
    });

    events.forEach((userEvent) => {
      buttons.forEach((btn) => {
        btn.addEventListener(userEvent, changeTheme);
      });
    });
  };

  events.forEach((userEvent) => {
    showButton.addEventListener(userEvent, handleChangeThemeEvent);
  });
}
