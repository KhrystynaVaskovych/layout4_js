import {getAllClass} from './additional-tools.js';
import {getClass} from './additional-tools.js';

const prev = [getClass('.prevUpper'), getClass('.prevLower')];
const next = [getClass('.nextUpper'), getClass('.nextLower')];
const carouselItems = [getAllClass('.carousel__item--upper'),
  getAllClass('.carousel__item--lower')];
const carousels = [getClass('.carousel__block--upper'),
  getClass('.carousel__block--lower')];

let count = [0, 0];

function moveToNext(carousel, carouselItems, index) {
  const carouselLength = carouselItems.length;

  if (count[index] < carouselLength - 1) {
    count[index]++;
  } else {
    count[index] = 0;
  }

  move(carousel, carouselLength, count[index]);
}

function moveToPrev(carousel, carouselItems, index) {
  const carouselLength = carouselItems.length;

  if (count[index] == 0) {
    count[index] = 2;
  } else {
    count[index]--;
  }

  move(carousel, carouselLength, count[index]);
}

function move(carousel, length, counter) {
  const trans = (100 / length) * counter;
  carousel.style.transform = `translate(-${trans}%)`;
}

const slider = {
  init: () => {
    next.forEach((el, index) => {
      el.onclick = function() {
        moveToNext(carousels[index], carouselItems[index], index);
      };
    });

    prev.forEach((el, index) => {
      el.onclick = function() {
        moveToPrev(carousels[index], carouselItems[index], index);
      };
    });
  },
};

export default slider;
