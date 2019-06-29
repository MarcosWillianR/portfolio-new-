{
  const button = document.querySelector('[data-lang="button"]');
  const content = document.querySelector('[data-lang="content"]');

  const events = ['touchstart', 'click'];

  const classActive = 'is-active';
  const classInactive = 'is-inactive';

  button.classList.add(classInactive);
  content.classList.add(classInactive);

  const handleClickEvent = (event) => {
    event.preventDefault();
    button.classList.replace(classInactive, classActive);
    content.classList.replace(classInactive, classActive);
    outsideEvent(content, events, () => {
      button.classList.replace(classActive, classInactive);
      content.classList.replace(classActive, classInactive);
    });
  };

  events.forEach((userEvent) => {
    button.addEventListener(userEvent, handleClickEvent);
  });
}
