import questionView from './question-view';
import transitionTo, {getTemplate} from './utilities';
import statsView from './stats-view';
import livesView from './lives-view';
import gameData from '../data/game-data';
import statsElement from './stats';

const getGame = (data, question) => {

  const content = `
  <header class="header">
    <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
    </div>
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
      ${livesView(data.lives)}
    </div>
  </header>
  <div class="game">
    ${questionView(question)}
    <div class="stats">
      <ul class="stats">
        ${statsView(data)}
      </ul>
   </div>
  </div>`;

  return getTemplate(`${content}`);
};

let nextElement = statsElement;

// TODO: переделать из императивного на функциональное
for (let i = gameData.questions.length - 1; i >= 0; i--) {
  let element = getGame(gameData, gameData.questions[i]);
  let answerBtns;

  if (gameData.questions[i].triple) {
    answerBtns = element.querySelectorAll('.game__option');

  } else {
    answerBtns = element.querySelectorAll('.game__answer');
  }

  for (const btn of answerBtns) {
    btn.addEventListener('click', transitionTo(nextElement));
  }

// TODO: обработчик для каждого типа вопроса и в обработчике будет логика подсчёта очков и переход на след. экран
// - повесить обработчик клика кнопки на форме
// - логика
// - вызываться ф-я из question-default-score.js / question-wide-score.js или question-triple-score.js

  nextElement = element;
}

export default nextElement;
