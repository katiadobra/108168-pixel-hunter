/** @module modules/get-page */

/**
 * @param {object} page
 */
const getPage = (page) => {
  let mainElement = document.querySelector('#main');

  mainElement.innerHTML = '';
  mainElement.appendChild(page);
};

export default getPage;
