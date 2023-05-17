import { getScores } from './addscores.js';

const render = () => {
  const scores = getScores();
  const scorecontain = document.querySelector('#scoresul');
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.innerText = `${score.name} ➡️ ${score.score} 👏`;
    scorecontain.appendChild(listItem);
  });
};

export default render;