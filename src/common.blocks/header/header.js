const minOffset = 88;
const header = document.querySelector('.header');

window.onscroll = () => {
  const hasClass = header.classList.contains('header--scrolled');

  if (minOffset < document.documentElement.scrollTop) {
    if (!hasClass) {
      header.classList.add('header--scrolled');
    }
  } else if (hasClass) {
    header.classList.remove('header--scrolled');
  }
};
