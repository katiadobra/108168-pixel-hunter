const getGameElement = (data, i) => {
  if (data.variants) {
    return data.variants.map( (variant) => `
      <label class="game__answer game__answer--${variant.type}">
        <input name="question${i + 1}" type="radio" value="${variant.type}">
        <span>${variant.value}</span>
      </label>`).join();
  }
  return '';
};

export default (game, i) => {
  return `<div class="game__option">
    <img src="${game.image}" alt="Option ${i + 1}" width="${game.imageWidth}" height="${game.imageHeight}">
    ${getGameElement(game, i)}
  </div>`;
};
