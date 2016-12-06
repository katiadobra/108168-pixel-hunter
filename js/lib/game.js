import questionView from './question-view';
import statsView from './stats-view';

export default (game) => {
  const content = `
  <header class="header">
    <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
    </div>
    <h1 class="game__timer">${game.time}</h1>
    <div class="game__lives">
    ${game.lives.map( (life) => {
      return life === 1 ?
      '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">' :
      '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
    }).join('')}
    </div>
  </header>
  <div class="game">
    ${game.questions.map( (question) => questionView(question)).join()}
    ${statsView(game)}
  </div>`;


  return `${content}`;
};
