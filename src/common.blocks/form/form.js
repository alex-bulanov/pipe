import openPopup from '../popup/popup';

const submitBtn = document.querySelector('.form__submit');
const inputs = document.querySelectorAll('.form__input');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  openPopup();
});

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.value.trim().length < 1) {
      input.value = null;
      input.classList.remove('form__input--filled');
    } else {
      input.classList.add('form__input--filled');
    }
  });
});
