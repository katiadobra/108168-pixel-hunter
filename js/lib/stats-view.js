export default (game) => {
  return `<div class="stats">
      <ul class="stats">
        ${game.stats.map( (stat) => `<li class="stats__result stats__result&#45;&#45;${stat}"></li>`)}
      </ul>
   </div>`;
};
