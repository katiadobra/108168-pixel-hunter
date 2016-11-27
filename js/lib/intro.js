import getTemplate from './get-template';
import transitionTo from './utilities';
import greetingElement from './greeting';

let intro = {
  'description': '<sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

/**
 * @type {string}
 */
const template =
  `<div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto">${intro.description}</p>
  </div>`;

/**
 * @type {Element} introElement
 */
const introElement = getTemplate(template);
const startBtn = introElement.querySelector('.intro__asterisk');

startBtn.addEventListener('click', transitionTo(greetingElement));

export default introElement;
