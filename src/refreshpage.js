import getScores from './modules/getscores.js';

const refreshpage = () => {
  const listItemElements = document.querySelectorAll('.listItem');
  listItemElements.forEach((element) => {
    element.remove();
  });
  getScores();
};

export default refreshpage;