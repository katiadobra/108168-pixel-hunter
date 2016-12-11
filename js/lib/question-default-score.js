/**
 * Answer for question type - default
 *
 * @param {Array} userAnswer
 * @param {Array} correctAnswers
 * @param {Number} time
 */
let scores = 0;
let equal = true;
export default (userAnswer, correctAnswers, time) => {

/**
 * Compare user answer with correct answer
 * Set score
 */
  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] !== correctAnswers[i]) {
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
};
