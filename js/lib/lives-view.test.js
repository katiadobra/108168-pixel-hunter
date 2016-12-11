import assert from 'assert';
import lifeView from './lives-view';

describe('Test view of lives', () => {
  describe('Test main functionality', () => {
    it('Should return 3 img when we have max 3', () => {
      let lives = 2;
      let maxLives = 3;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, '<img');

      assert.equal(3, positions.length);

    });
    it('Should return 2 full img and 1 empty img', () => {
      let lives = 2;
      let maxLives = 3;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, 'full');

      assert.equal(2, positions.length);

      positions = findInString(result, 'empty');

      assert.equal(1, positions.length);

    });
    it('Should return 10 img-elements when we have max 10 lives, 2 full, and 8 empty', () => {
      let lives = 2;
      let maxLives = 10;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, '<img');

      assert.equal(10, positions.length);

      positions = findInString(result, 'full');

      assert.equal(2, positions.length);

      positions = findInString(result, 'empty');

      assert.equal(8, positions.length);

    });
    it('Should return 0 img-elements when we have max 0 lives', () => {
      let lives = 2;
      let maxLives = 0;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, '<img');
      assert.equal(0, positions.length);

    });

    it('Should return 10 img-elements when we have 0 lives and max 10 lives', () => {
      let lives = 0;
      let maxLives = 10;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, '<img');
      assert.equal(10, positions.length);

    });

    it('Should return 10 img-elements when we have negative lives', () => {
      let lives = -1;
      let maxLives = 10;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, '<img');
      assert.equal(10, positions.length);

    });

    it('Should return 0 img-elements when we have negative data', () => {
      let lives = -1;
      let maxLives = -1;

      let result = lifeView(lives, maxLives);

      let positions = findInString(result, '<img');
      assert.equal(0, positions.length);

    });


  });
});

/**
 * Поиск всех вхождений
 * Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле.
 * Как только получаем очередную позицию – начинаем следующий поиск со следующей.
 *
 * @param {string} str
 * @param {string} whatToFind
 * @return {Array} positions
 */
let findInString = (str, whatToFind) => {
  let pos = 0;
  let positions = [];
  // while (true) {
  for (; ;) {
    let foundPos = str.indexOf(whatToFind, pos);
    if (foundPos === -1) {
      break;
    }

    positions.push(foundPos);

    pos = foundPos + 1; // продолжить поиск со следующей
  }
  return positions;
};
