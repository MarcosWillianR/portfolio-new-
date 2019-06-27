function calcMainWidth(leftSidebar, rightSidebar, classActive, classInactive) {
  const mainElement = document.querySelector('[data-content="main"]');

  if (leftSidebar.classList.contains(classActive)) {
    mainElement.setAttribute('data-leftSidebar', 'active');
  } else if (leftSidebar.classList.contains(classInactive)) {
    mainElement.setAttribute('data-leftSidebar', 'inactive');
  }

  if (rightSidebar.classList.contains(classActive)) {
    mainElement.setAttribute('data-rightSidebar', 'active');
  } else if (rightSidebar.classList.contains(classInactive)) {
    mainElement.setAttribute('data-rightSidebar', 'inactive');
  }
}
