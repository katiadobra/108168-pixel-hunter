import transitionTo, {getTemplate} from './utilities';
import rulesElement from './rules';

/**
 * @type {Object} greeting
 */
const greeting = {
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  description: `
    Правила игры просты.<br>
    Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
    Задача кажется тривиальной, но не думай, что все так просто.<br>
    Фотореализм обманчив и коварен.<br>
    Помни, главное — смотреть очень внимательно.</p>`
};

/**
 * @type {string}
 */
const template =
  `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${greeting.title}</h3>
      <p>${greeting.description}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

/**
 * @type {Element} greetingElement
 */
const greetingElement = getTemplate(template);
const btnNext = greetingElement.querySelector('.greeting__continue');

btnNext.addEventListener('click', transitionTo(rulesElement));

export default greetingElement;
