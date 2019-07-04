{
  const buttonView1 = document.querySelector('[data-view="buttonView1"]');
  const buttonView2 = document.querySelector('[data-view="buttonView2"]');
  const buttonView3 = document.querySelector('[data-view="buttonView3"]');
  const containerView = document.querySelector('[data-view="container"]');

  const events = ['touchstart', 'click'];

  const classList = ['is-view1', 'is-view2', 'is-view3'];

  const handleClickView1 = (event) => {
    event.preventDefault();

    classList.forEach((className) => {
      containerView.classList.remove(className);
      buttonView1.classList.remove(className);
      buttonView2.classList.remove(className);
      buttonView3.classList.remove(className);
    });
    buttonView1.classList.add('is-view1');
    containerView.classList.add('is-view1');
  };

  const handleClickView2 = (event) => {
    event.preventDefault();

    classList.forEach((className) => {
      containerView.classList.remove(className);
      buttonView1.classList.remove(className);
      buttonView2.classList.remove(className);
      buttonView3.classList.remove(className);
    });
    buttonView2.classList.add('is-view2');
    containerView.classList.add('is-view2');
  };

  const handleClickView3 = (event) => {
    event.preventDefault();

    classList.forEach((className) => {
      containerView.classList.remove(className);
      buttonView1.classList.remove(className);
      buttonView2.classList.remove(className);
      buttonView3.classList.remove(className);
    });
    buttonView3.classList.add('is-view3');
    containerView.classList.add('is-view3');
  };

  events.forEach((userEvent) => {
    buttonView1.addEventListener(userEvent, handleClickView1);
    buttonView2.addEventListener(userEvent, handleClickView2);
    buttonView3.addEventListener(userEvent, handleClickView3);
  });

  window.addEventListener('pageshow', () => {
    buttonView2.classList.add('is-view2');
    containerView.classList.add('is-view2');
  });
}
