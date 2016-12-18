/**
 * Вызывается для каждого экрана
 * записывает ответ пользователя в value
 * и копирует этот объект
 * @param {Array} array
 * @return {Array}
 */
export const setAnswer = (array) => {
  let arrayCopy = array.slice();

  // arrayCopy.value = '';

  return array;
};

/**
 * Проверяет, на все ли вопросы ответил пользователь
 * @param {Array} arr
 * @return {Boolean}
 */
export const checkFinished = (arr) => {
  return arr.foreach((it) => it.hasOwnProperty('value'));
};

/**
 * Проверяет ответы пользователя
 * @param {Array} arr
 */
export const checkAnswers = (arr) => {

};

export const doTransition = () => {
  if (lives < 0 ) {
    transitionTo(statsElement);
  } else {
    transitionTo(next)
  }
};

export const createListener = (setAnswer, state) => {
  (e) => {
    state.answers = setAnswer(state.answers);

    if (checkFinished) {
      setStats(checkAnswers(state.answers), time);
      doTransition();
    }
  }
};
