import assert from 'assert';
import score from './question-default-score';

describe('Test score engine', () => {
  describe('Setting', () => {
    it('Should return 100 points when both userAnswers are correct', () => {
      let scorePoints = score(['photo', 'paint'], ['photo', 'paint'], 15);

      assert.equals(scorePoints, 100);
    });
    it('Should return 150 points when both userAnswers are correct and fast', () => {
      let scorePoints = score(['photo', 'paint'], ['photo', 'paint'], 9);

      assert.equals(scorePoints, 150);
    });
    it('Should return 50 points when both userAnswers are correct but slow', () => {
      let scorePoints = score(['photo', 'paint'], ['photo', 'paint'], 21);

      assert.equals(scorePoints, 50);
    });
    it('Should return 0 points when both userAnswers are wrong', () => {
      let scorePoints = score(['photo', 'paint'], ['paint', 'photo'], 21);

      assert.equals(scorePoints, 0);
    });
    it('Should return 0 points when both userAnswers are fast but wrong', () => {
      let scorePoints = score(['photo', 'paint'], ['paint', 'photo'], 8);

      assert.equals(scorePoints, 0);
    });
    it('Should return 0 points when even one userAnswer is wrong', () => {
      let scorePoints = score(['photo', 'paint'], ['paint', 'photo'], 18);

      assert.equals(scorePoints, 0);
    });
  });

  describe('Failures', () => {
    it('Throws an error if negative value of time passed', () => {
      let scorePoints = score(['photo', 'paint'], ['paint', 'photo'], -8);

      assert.throws(() => scorePoints);
    });
  });
});
