import getTemplate from './get-template';
import getPage from './get-page';
import greetingElement from './greeting';

/**
 * @type {string}
 */
const template =
  `<div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
  </div>`;

/**
 * @type {Element} introElement
 */
const introElement = getTemplate(template);
const startBtn = introElement.querySelector('.intro__asterisk');

startBtn.onclick = (e) => {
  e.preventDefault();

  getPage(greetingElement);
};

export default introElement;
