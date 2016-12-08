export default (game) => {
  return game.stats.map( (stat) => `<li class="stats__result stats__result&#45;&#45;${stat}"></li>`);
};
