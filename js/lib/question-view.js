import answerView from './answer-view';

const setClass = (data) => {
  if (data.wide) {
    return 'game__content--wide';
  } else if (data.triple) {
    return 'game__content--triple';
  }
  return '';
};

export default (game) => {
  return `
    <p class="game__task">${game.task}</p>
    <form class="game__content ${setClass(game)}">
      ${game.answers.map( (it, i) => answerView(it, i)).join('')}
    </form>`;
};
