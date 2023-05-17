import render from './render.js';

const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bWICSzhifl4RL1S8Lvdq/scores/', {

  method: 'GET',

  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    render(data.result);
  });

export default getScores;