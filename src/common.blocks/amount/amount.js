import Parallax from 'parallax-js';
import { CountUp } from 'countup.js';

const sections = document.querySelectorAll('section');
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

parallaxInstance.friction(0.2, 0.2);

const countUp = new CountUp('value', 100000, {
  duration: 1,
  useEasing: false,
  separator: ' ',
  decimal: ' ',
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'amount') {
        countUp.start();
      }
    }
  });
}, {
  threshold: 0.7,
});

sections.forEach((section) => {
  observer.observe(section);
});
