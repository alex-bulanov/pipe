import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const bonusRange = document.getElementById('bonus-range');

console.log(bonusRange);

if (bonusRange) {
  noUiSlider.create(bonusRange, {
    start: [0],
    orientation: 'vertical',
    direction: 'rtl',
    connect: true,
    step: 1,
    range: {

      min: 0,
      '20%': 1,
      '40%': 2,
      '60%': 3,
      '80%': 4,
      max: 5,
    },
  });

  bonusRange.noUiSlider.on('update', (value) => {
    console.log(value);
    // inputs[handle].value = Math.round(values[handle]);
  });
}
