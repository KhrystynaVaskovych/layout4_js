import {modal} from './modules/modal-module.js';
import {getAllClass} from './additional-tools.js';
import {getClass} from './additional-tools.js';

const picsArr = getAllClass('.gallery__block__item');
const modalWindow = getClass('.modal');

modalWindow.onclick = function() {
  modal.hideModal(modalWindow);
};

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    modal.hideModal(modalWindow);
  }
};

const modalWindowOpen = {
  init: () => {
    picsArr.forEach((el) => {
      el.onclick = function(e) {
        const content = e.target;
        let pic = getClass('.modal__pic');

        modalWindow.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        if (content.classList.contains('hidden__block')) {
          pic.src = content.previousElementSibling.src;
        } else {
          pic.src = content.parentNode.previousElementSibling.src;
        }
      };
    });
  },
};

export default modalWindowOpen;
