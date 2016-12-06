import transitionTo, {getTemplate} from './utilities';
import statsElement from './stats';
import template from './game';
import gameThreeData from '../data/game3-data';

/**
 * @type {Element} gameThreeElement
 */
const gameThreeElement = getTemplate(template(gameThreeData));
const options = gameThreeElement.querySelectorAll('.game__option');

for (const option of options) {
  option.addEventListener('click', transitionTo(statsElement));
}

export default gameThreeElement;
