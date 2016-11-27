import getTemplate from './get-template';
import transitionTo from './utilities';
import gameOneElement from './game-1';

/**
 * @type {Element}
 */
const template =
  `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

/**
 * @type {Element} rulesElement
 */
const rulesElement = getTemplate(template);
const rulesSubmit = rulesElement.querySelector('.rules__button');

rulesElement.querySelector('.rules__input').oninput = function () {
  if (this.value) {
    rulesSubmit.removeAttribute('disabled');
  } else {
    rulesSubmit.setAttribute('disabled', '');
  }
};

rulesSubmit.addEventListener('click', transitionTo(gameOneElement));

export default rulesElement;
