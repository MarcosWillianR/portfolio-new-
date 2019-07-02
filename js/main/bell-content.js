{
  const button = document.querySelector('[data-bell="button"]');
  const content = document.querySelector('[data-bell="content"]');

  const events = ['touchstart', 'click'];

  const classActive = 'is-active';
  const classInactive = 'is-inactive';

  content.classList.add(classInactive);

  const handleClick = (event) => {
    event.preventDefault();

    content.classList.replace(classInactive, classActive);
    outsideEvent(content, events, () => {
      content.classList.replace(classActive, classInactive);
    });
  };

  events.forEach((userEvent) => {
    button.addEventListener(userEvent, handleClick);
  });
}
