class Dropdown {
  constructor(button, content, classActive, classInactive, events) {
    this.button = document.querySelector(button);
    this.content = document.querySelector(content);
    this.events = events || ['touchstart', 'click'];
    this.classActive = classActive;
    this.classInactive = classInactive;
  }

  handleEvents(event) {
    event.preventDefault();

    this.button.classList.replace(this.classInactive, this.classActive);
    this.content.classList.replace(this.classInactive, this.classActive);

    outsideEvent(this.content, this.events, () => {
      this.button.classList.replace(this.classActive, this.classInactive);
      this.content.classList.replace(this.classActive, this.classInactive);
    });
  }

  dropdownStartEvents() {
    this.events.forEach((userEvent) => {
      this.button.addEventListener(userEvent, this.handleEvents);
    });
  }

  bindEvents() {
    this.handleEvents = this.handleEvents.bind(this);
  }

  init() {
    this.bindEvents();
    this.dropdownStartEvents();
    this.button.classList.add(this.classInactive);
    this.content.classList.add(this.classInactive);
  }
}
