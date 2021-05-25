const popup = document.querySelector('.popup');
const popupCloses = document.querySelectorAll('.popup__closes');
const body = document.querySelector('body');

function closePopup() {
  popupCloses.forEach((item) => {
    item.removeEventListener('click', closePopup);
  });

  popup.classList.remove('popup--active');
  body.style.paddingRight = 0;
  body.classList.remove('lock');
}

function openPopup() {
  const offset = window.innerWidth - document.querySelector('.wrapper').offsetWidth;
  body.style.paddingRight = `${offset}px`;

  body.classList.add('lock');
  popup.classList.add('popup--active');

  popupCloses.forEach((item) => {
    item.addEventListener('click', closePopup);
  });

  popup.addEventListener('click', (event) => {
    if (!event.target.closest('.popup__content')) {
      closePopup();
    }
  });
}

export default openPopup;
