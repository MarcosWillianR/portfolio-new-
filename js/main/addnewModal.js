{
  const buttonOpen = document.querySelector('[data-addnew="button_open"]');
  const buttonClose = document.querySelectorAll('[data-addnew="button_close"]');
  const container = document.querySelector('[data-addnew="container"]');
  const content = document.querySelector('[data-addnew="content"]');

  const events = ['touchstart', 'click'];

  const handleClick = (event) => {
    event.preventDefault();

    container.classList.add('is-visible');
    content.classList.add('is-show');

    document.body.classList.add('addModalOn');

    outsideEvent(content, events, () => {
      container.classList.remove('is-visible');
      content.classList.remove('is-show');
      document.body.classList.remove('addModalOn');
    });
  };

  const handleClickClose = (eventClose) => {
    eventClose.preventDefault();

    container.classList.remove('is-visible');
    content.classList.remove('is-show');
  };

  events.forEach((userEvent) => {
    buttonOpen.addEventListener(userEvent, handleClick);
    buttonClose.forEach((closeBtn) => {
      closeBtn.addEventListener(userEvent, handleClickClose);
    });
  });
}
