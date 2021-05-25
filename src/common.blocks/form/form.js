import openPopup from '../popup/popup';

const submitBtn = document.querySelector('.form__submit');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  openPopup();
});
