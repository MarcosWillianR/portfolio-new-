{
  const buttonOpen = document.querySelector('[data-addnew="button_open"]');
  const buttonClose = document.querySelectorAll('[data-addnew="button_close"]');
  const container = document.querySelector('[data-addnew="container"]');
  const content = document.querySelector('[data-addnew="content"]');

  const events = ['touchstart', 'click'];

  const handleToggleClick = (event) => {
    event.preventDefault();

    container.classList.toggle('is-visible');
    content.classList.toggle('is-show');

    document.body.classList.toggle('addModalOn');
  };

  const handleOutsideClick = event => (event.target === container ? handleToggleClick(event) : false);

  events.forEach((userEvent) => {
    buttonOpen.addEventListener(userEvent, handleToggleClick);
    buttonClose.forEach((closeBtn) => {
      closeBtn.addEventListener(userEvent, handleToggleClick);
    });
    container.addEventListener(userEvent, handleOutsideClick);
  });
}
