import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

const CONTROL_WIDTH = 768;
const BONUS_VALUES = {
  500000: '25 000',
  1000000: '40 000',
  2000000: '70 000',
  3000000: '95 000',
  4000000: '110 000',
  5000000: '120 000',
};

const bonusValue = document.querySelector('.bonus__value span');
const bonusRange = document.getElementById('bonus-range');

let isSliderCreate = false;

function sliderInit() {
  let sliderOrientation = 'vertical';
  let sliderDirection = 'rtl';

  if (window.innerWidth >= CONTROL_WIDTH) {
    sliderOrientation = 'horizontal';
    sliderDirection = 'ltr';
  }

  if (isSliderCreate) {
    bonusRange.noUiSlider.destroy();
  }

  noUiSlider.create(bonusRange, {
    start: [1000000],
    orientation: sliderOrientation,
    direction: sliderDirection,
    keyboardSupport: true,
    connect: [true, false],
    range: {
      min: [500000, 500000],
      '20%': [1000000, 1000000],
      '40%': [2000000, 2000000],
      '60%': [3000000, 3000000],
      '80%': [4000000, 4000000],
      max: [5000000, 5000000],
    },
    padding: 0,
    pips: {
      mode: 'steps',
      density: 20,

      format: wNumb({
        thousand: ' ',
        postfix: ' ₽',
      }),
    },
  });

  bonusRange.noUiSlider.on('update', (values, handle) => {
    bonusValue.innerHTML = BONUS_VALUES[Math.ceil(values[handle])];
  });

  isSliderCreate = true;
}

document.addEventListener('DOMContentLoaded', () => {
  sliderInit();
});

window.addEventListener('resize', () => {
  sliderInit();
});
