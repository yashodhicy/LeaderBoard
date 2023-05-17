const AddscoreApi = async (username, gamescore) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bWICSzhifl4RL1S8Lvdq/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: username.toString(),
      score: gamescore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default AddscoreApi;