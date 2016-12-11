/**
 * Answer for question type - default
 *
 * @param {Array} userAnswer
 * @param {Array} correctAnswers
 * @param {Number} time
 * @return {Number} score
 */
export default (userAnswer, correctAnswers, time) => {
  let score = 0;
  let equal = true;

/**
 * Compare user answer with correct answer
 * Set score
 */
  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] !== correctAnswers[i]) {
      equal &= false;
    }
  }

  if (equal) {
    score += 100;
  }

  if (equal && time > 20) {
    score -= 50;
  } else if (equal && time < 10) {
    score += 50;
  }

  return score;
};
