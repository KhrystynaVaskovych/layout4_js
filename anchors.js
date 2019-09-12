import {getAllClass} from './additional-tools.js';
import {getClass} from './additional-tools.js';

const menu = getClass('.header__navigation');
const stickyPos = menu.offsetTop;
const menuLinks = getAllClass('.header__navigation__bar__item');

function fixMenu() {
  if (window.pageYOffset > stickyPos) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
}

function scrollTo(anchor, element) {
  element.addEventListener('click', (e) => {
    const point = getClass(`.${anchor}`);

    e.preventDefault();
    point.scrollIntoView({
      behavior: 'smooth',
    });
  });
}

const anchors = {
  init: () => {
    window.onscroll = function() {
      fixMenu();
    };
    menuLinks.forEach((el) => {
      const anchorLink = el.firstElementChild.getAttribute('href');
      const anchor = anchorLink.substring(1);

      scrollTo(anchor, el);
    });
  },
};

export default anchors;
