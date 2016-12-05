import transitionTo, {getTemplate} from './utilities';
import gameThreeElement from './game-3';
import template from './game';
import gameTwoData from '../data/game2-data';

/**
 * @type {Element} gameOneElement
 */
const gameTwoElement = getTemplate(template(gameTwoData));
const answerBtns = gameTwoElement.querySelectorAll('.game__answer');

for (const btn of answerBtns) {
  btn.addEventListener('click', transitionTo(gameThreeElement));
}

export default gameTwoElement;
