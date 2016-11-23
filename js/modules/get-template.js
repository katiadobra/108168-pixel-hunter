/** @module modules/get-template */

/**
 * @param {string} templateString
 * @return {Element}
 */
const getTemplate = (templateString) => {
  const templateElement = document.createElement('div');
  templateElement.innerHTML = templateString;

  return templateElement;
};

export default getTemplate;
