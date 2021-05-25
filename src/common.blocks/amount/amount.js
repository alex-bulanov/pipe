import Parallax from 'parallax-js';

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

parallaxInstance.friction(0.2, 0.2);
