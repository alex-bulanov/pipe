const sections = document.querySelectorAll('section');
const pragmaText = document.querySelector('.pragma__text--color');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'pragma') {
        pragmaText.classList.add('pragma__text--painted');
      }
    }
  });
}, {
  threshold: 0.7,
});

sections.forEach((section) => {
  observer.observe(section);
});
