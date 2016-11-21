import getTemplate from './template';
import introElement from './modules/intro';
import greetingElement from './modules/greeting';
import statsElement from './modules/stats';
import rulesElement from './modules/rules';
import gameOneElement from './modules/game-1';
import gameTwoElement from './modules/game-2';
import gameThreeElement from './modules/game-3';

(function () {

  // Rules
  let rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = function () {
    if (this.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = getTemplate(` \
    <span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>
    <span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>`
  );
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    introElement,
    greetingElement,
    rulesElement,
    gameOneElement,
    gameTwoElement,
    gameThreeElement,
    statsElement
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
