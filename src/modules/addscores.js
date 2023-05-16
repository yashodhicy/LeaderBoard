const getScores = () => {
  let scores;
  if (localStorage.getItem('scores') === null) {
    scores = [];
  } else {
    scores = JSON.parse(localStorage.getItem('scores'));
  }
  return scores;
};

const addScores = (score) => {
  const scores = getScores();
  scores.push(score);
  localStorage.setItem('scores', JSON.stringify(scores));
};

export { getScores, addScores };