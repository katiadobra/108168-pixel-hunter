import answerView from './answer-view';

export default (game) => {
  return `
    <p class="game__task">${game.question}</p>
    <form class="game__content ${game.wide ? 'game__content--wide' : game.triple ? 'game__content--triple' : ''}">
      ${game.answers.map( (answer) => answerView(answer)).join('')}
    </form>`;
};
