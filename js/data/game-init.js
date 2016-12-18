import {questionsData, AnswerType} from './game-data';

export const initGame = {
  lives: 3,
  time: 30,
  level: 0,
  questions: questionsData,
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError('Number of lives can\'t be negative');
  }

  return Object.assign({}, game, {
    lives: lives
  });
};

export const setTime = (game, time) => {
  if (time < 0) {
    throw new RangeError('Time can not be negative');
  }
  if (time > 30) {
    throw new RangeError('Time can not be more 30');
  }
  return Object.assign({}, game, {time: time});
};

export const setLevel = (game, level) => {
  if (level < 0) {
    throw new RangeError('Level can not be negative');
  }
  if (level > game.questions.length) {
    throw new RangeError('Level can not be more then number of questions');
  }
  return Object.assign({}, game, {level: level});
};

export const initialGame = (game) => {
  return Object.assign({}, game);
};
