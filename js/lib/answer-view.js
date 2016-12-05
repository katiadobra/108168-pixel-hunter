export default (game) => {
  return `<div class="game__option">
    <img src="${game.image}" alt="Option 1" width="468" height="458">
    ${game.variants ? game.variants.map( (variant) => `
      <label class="game__answer game__answer--${variant.type}">
        <input name="question1" type="radio" value="${variant.type}">
        <span>${variant.value}</span>
      </label>`).join() : ''}
  </div>`;
};
