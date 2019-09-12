import {getAllClass} from './additional-tools.js';
import {getClass} from './additional-tools.js';

const dropdownArr = getAllClass('.what-we-do__block__menu__item');
const myPic = getClass('.what-we-do__block__pic__item');
const dropBoxesArr = getAllClass('.what-we-do__block__menu__text');
const tabSwitch = {
  init: () => {
    dropdownArr.forEach((el, index) => {
      el.onclick = function() {
        if (dropBoxesArr[index].classList.contains('visibleBlock')) {
          dropBoxesArr[index].classList.remove('visibleBlock');
        } else {
          dropBoxesArr.forEach((el) => el.classList.remove('visibleBlock'));
          dropBoxesArr[index].classList.add('visibleBlock');
        }

        switch (index) {
          case 1:
            myPic.src = './img/tab_work.jpg';
            break;
          case 2:
            myPic.src = './img/tab_relax.jpg';
            break;
          default:
            myPic.src = './img/what-we-do-man.png';
        }
      };
    });
  },
};

export default tabSwitch;
