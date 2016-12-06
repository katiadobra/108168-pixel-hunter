import transitionTo, {getTemplate} from './utilities';
import gameTwoElement from './game-2';
import template from './game';
import gameOneData from '../data/game1-data';

/**
 * @type {Element} gameOneElement
 */
const gameOneElement = getTemplate(template(gameOneData));
const answerBtns = gameOneElement.querySelectorAll('.game__answer');

for (const btn of answerBtns) {
  btn.addEventListener('click', transitionTo(gameTwoElement));
}

export default gameOneElement;
