const liveElement = (state) => {
  return `<img src="img/heart__${state}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

export default (data) => {
  const gameLives = [];

  for (let i = 3; i > 0; i--) {
    const live = liveElement(i - data > 0 ? 'empty' : 'full');
    gameLives.push(live);
  }

  return `<div class="game__lives">${gameLives.join(' ')}</div>`;
};
