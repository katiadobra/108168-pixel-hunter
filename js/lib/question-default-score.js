/**
 * Answer for question type - default
 *
 * @param {Array} userAnswer
 * @param {Array} correctAnswers
 * @param {Number} time
 */
export default (userAnswer, correctAnswers, time) => {
  let scores = 0;

  let equal = true;

/**
 * Compare user answer with correct answer
 * Set score
 */
  for (i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] != correctAnswers[i]) {
      equal &= false;
    } else {
      equal &= true;
      scores += 100;

      // slow or fast answer
      if (time > 20) {
        scores -= 50;
      } else if (time < 10) {
        scores += 50;
      }
    }
  }
}
