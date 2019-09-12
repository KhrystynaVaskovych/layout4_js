/* eslint-disable max-len */
function renderBlocks(data) {
  const wrapper = document.querySelector('.blogs__content');
  const item = createEl('div', 'blogs__content__item', wrapper);
  const time = getTime(new Date(data.published));

  item.innerHTML = `
      <div class="blogs__content__item__pic" style="background-image: url(${data.previewImg})"></div>
      <div class="blogs__content__item__calendar">
          <h2 class="blogs__content__item__calendar__day">${time.day}</h2>
          <h5 class="blogs__content__item__calendar__month">${time.month}</h5>
      </div>
      <h3 class="small-title clipped--title">${data.title}</h3>
      <p class="simple-paragraph--justify clipped">${data.description}</p>
      <hr>
      <div class="blogs__content__item__footer">
          <img src="./img/views.png" alt="views" height="10px">
          <p class="cursive-light">${data.watched}</p>
          <img src="./img/comments.png" alt="comment" height="10px">
          <p class="cursive-light">${data.comments}</p>
      </div>`;
}

function getTime(date) {
  const locale = 'en-us';
  const month = date.toLocaleString(locale, {month: 'short'});
  const day = date.getDate();
  const year = date.getYear();

  return {'month': month, 'day': day, 'year': year};
}

function createEl(tag, className, appender) {
  const element = document.createElement(tag);
  element.classList.add(className);
  appender.appendChild(element);

  return element;
}

function renderFooterItems(data) {
  const wrapper = document.querySelector('.footer__block__item--blogs');
  const item = createEl('div', 'footer__block__item__article', wrapper);
  const time = getTime(new Date(data.published));

  item.innerHTML = `
  <div class="footer__block__item__article__pic" style = "background-image: url(${data.previewImg})"></div>
  <div class="footer__block__item__article__text">
      <h5 class="small-title clipped--title">${data.title}</h5>
      <p class="cursive-light">${time.month}${time.day},${time.year}</p>
      </div>
      `;
}

const rendering = {
  init: function() {
    fetch('http://localhost:3000/api/blogs')
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i <= 5; i++) {
        (i < 3) ? renderBlocks(data.blogs[i]) : renderFooterItems(data.blogs[i]);
          }
        })
        .catch((error) => console.error(error));
  },
};

export default rendering;
