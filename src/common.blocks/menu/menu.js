const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__nav-link[data-goto]');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      menuLinks.forEach((link) => {
        const currentAnchor = link.getAttribute('href').replace('#', '');
        if (currentAnchor === entry.target.id) {
          link.classList.add('menu__nav-link--active');
        } else {
          link.classList.remove('menu__nav-link--active');
        }
      });
    }
  });
}, {
  threshold: 0.7,
});

sections.forEach((section) => {
  observer.observe(section);
});

function onMenuToggle() {
  this.classList.toggle('menu__toggle--active');
  menu.classList.toggle('menu--active');

  if (menu.classList.contains('menu--active')) {
    document.querySelector('body').classList.add('lock');
  } else {
    document.querySelector('body').classList.remove('lock');
  }
}

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const blockOffset = gotoBlock.getBoundingClientRect().top + pageYOffset;
    const gotoBlockValue = blockOffset - document.querySelector('header').offsetHeight;

    if (menuToggle.classList.contains('menu__toggle--active')) {
      document.body.classList.remove('lock');
      menuToggle.classList.remove('menu__toggle--active');
      menu.classList.remove('menu--active');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });

    e.preventDefault();
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}

menuToggle.addEventListener('click', onMenuToggle);
