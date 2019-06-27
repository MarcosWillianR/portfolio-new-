{
  const button = document.querySelector('[data-sidebar="button"]');
  const leftSidebarDiv = document.querySelector('[data-sidebar="sidebarLeft"]');
  const rightSidebarDiv = document.querySelector('[data-sidebar="sidebarRight"]');

  const events = ['tuchstart', 'click'];


  const classActive = 'is-active';
  const classInactive = 'is-inactive';

  const rightSidebarClassList = rightSidebarDiv.classList;
  const leftSidebarClassList = leftSidebarDiv.classList;

  // Função para receber a largura dinâmicamente
  // e alterar os estados de acordo com a largura atual.
  const handleDeviceWithEvent = (event) => {
    const dinamicWidth = event.currentTarget.innerWidth;

    // right Sidebar IF
    if (dinamicWidth > 1440) {
      rightSidebarClassList.add(classActive);
      rightSidebarClassList.replace(classInactive, classActive);
    } else if (dinamicWidth < 1440) {
      rightSidebarClassList.add(classInactive);
      rightSidebarClassList.replace(classActive, classInactive);
    }

    // left Sidebar IF
    if (dinamicWidth > 768) {
      leftSidebarClassList.add(classActive);
      leftSidebarClassList.replace(classInactive, classActive);
    } else if (dinamicWidth < 768) {
      leftSidebarClassList.add(classInactive);
      leftSidebarClassList.replace(classActive, classInactive);
    }

    calcMainWidth(leftSidebarDiv, rightSidebarDiv, classActive, classInactive);

    return rightSidebarClassList.value && leftSidebarClassList.value;
  };

  // Adicionar/Remover a classe no clique
  const handleClickEvent = () => {
    const atribute = 'data-off';
    // Right sidebar IF
    if (rightSidebarClassList.contains(classActive)) {
      rightSidebarClassList.replace(classActive, classInactive);
      rightSidebarDiv.setAttribute(atribute, '');
      // Left sidebar else \/
    } else if (leftSidebarClassList.contains(classActive) && rightSidebarDiv.hasAttribute(atribute)) {
      leftSidebarClassList.replace(classActive, classInactive);
      rightSidebarDiv.removeAttribute(atribute);
      // Left sidebar else \/
    } else if (leftSidebarClassList.contains(classInactive)) {
      leftSidebarClassList.replace(classInactive, classActive);
      // Right sidebar else \/
    } else if (leftSidebarClassList.contains(classActive) && !rightSidebarDiv.hasAttribute(atribute)) {
      rightSidebarClassList.replace(classInactive, classActive);
    }

    calcMainWidth(leftSidebarDiv, rightSidebarDiv, classActive, classInactive);
  };

  events.forEach((userEvent) => {
    button.addEventListener(userEvent, handleClickEvent);
  });

  window.addEventListener('resize', debounce(handleDeviceWithEvent, 50));

  // Adicionar as classes automaticamente no carregamento da página
  // Dependendo da largura do dispositivo.
  window.addEventListener('pageshow', () => {
    if (window.innerWidth < 1440) {
      rightSidebarClassList.add(classInactive);
    } else if (window.innerWidth > 1440) {
      rightSidebarClassList.add(classActive);
    }

    if (window.innerWidth < 768) {
      leftSidebarClassList.add(classInactive);
    } else if (window.innerWidth > 768) {
      leftSidebarClassList.add(classActive);
    }

    calcMainWidth(leftSidebarDiv, rightSidebarDiv, classActive, classInactive);
  });
}
