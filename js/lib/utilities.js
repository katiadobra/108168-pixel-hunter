/**
 * @param {Element} page
 */
export const setNextPage = (page) => {
  let mainElement = document.querySelector('#main');

  mainElement.innerHTML = '';
  mainElement.appendChild(page);
};

/**
 * @param {Element} page
 * @return {function}
 */
const transitionTo = (page) => () => {
  setNextPage(page);
};

export default transitionTo;
