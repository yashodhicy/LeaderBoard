const render = (scores) => {
  const scorecontain = document.querySelector('#scoresul');
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    if (score.score >= 100) {
      listItem.innerText = `${score.user} : ${score.score} 🌟`;
    } else if (score.score >= 80) {
      listItem.innerText = `${score.user} : ${score.score} ⭐`;
    } else if (score.score >= 60) {
      listItem.innerText = `${score.user} : ${score.score} ✨`;
    } else {
      listItem.innerText = `${score.user} : ${score.score} `;
    }
    scorecontain.appendChild(listItem);
  });
};

export default render;