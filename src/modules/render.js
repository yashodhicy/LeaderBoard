const render = (scores) => {
  const scorecontain = document.querySelector('#scoresul');
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.innerText = `${score.user} : ${score.score} 👏`;
    scorecontain.appendChild(listItem);
  });
};

export default render;