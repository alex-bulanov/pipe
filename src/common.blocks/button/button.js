const buttons = document.querySelectorAll('.button[href^="#"]');

function onbtnClick(event) {
  const gotoBlock = document.querySelector(this.dataset.goto);
  const blockOffset = gotoBlock.getBoundingClientRect().top + pageYOffset;
  const gotoBlockValue = blockOffset - document.querySelector('header').offsetHeight;

  window.scrollTo({
    top: gotoBlockValue,
    behavior: 'smooth',
  });

  event.preventDefault();
}

if (buttons.length > 0) {
  buttons.forEach((button) => {
    button.addEventListener('click', onbtnClick);
  });
}
