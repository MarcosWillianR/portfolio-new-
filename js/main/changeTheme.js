{
  const showButton = document.querySelector('[data-change="showBtn"]');
  const buttons = document.querySelectorAll('[data-change="btn"]');
  const listbtn = document.querySelector('[data-change="list-btn"]');
  const events = ['touchstart', 'click'];


  const { body } = document;

  const changeTheme = (event) => {
    const eventTarget = event.target.classList;

    const themeColors = ['red', 'blue', 'purple', 'orange', 'green'];
    const themeBackground = ['t-light', 't-dark'];

    const eventArray = Array.from(eventTarget);
    const eventThemeBG = eventArray[0];
    const eventthemeColor = eventArray[1];

    if (themeColors.includes(eventthemeColor) && themeBackground.includes(eventThemeBG)) {
      themeColors.forEach((themeColor) => {
        body.classList.remove(themeColor);
      });
      themeBackground.forEach((themeBG) => {
        body.classList.remove(themeBG);
      });
      body.classList.add(eventThemeBG, eventthemeColor);
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
