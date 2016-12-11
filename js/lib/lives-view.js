const liveElement = (state) => {
  return `<img src="img/heart__${state}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

export default (data, max) => {
  const gameLives = [];

  if (data > max) {
    data = max;
  }

  if (data < 0) {
    data = 0;
  }

  for (let i = 0; i < data; i++) {
    const live = liveElement('full');
    gameLives.push(live);
  }

  for (let i = 0; i < max - data; i++) {
    const live = liveElement('empty');
    gameLives.push(live);
  }
  return `<div class="game__lives">${gameLives.join(' ')}</div>`;
};
