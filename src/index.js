import './style.css';
import AddscoreApi from './modules/addscores.js';
import getScores from './modules/getscores.js';
import refreshpage from './refreshpage.js';
import validateForm from './validation.js';

document.addEventListener('DOMContentLoaded', getScores());
const addbtn = document.getElementById('submitbtn');

addbtn.addEventListener('click', (event) => {
  event.preventDefault();

  const inputname = document.querySelector('#name').value;
  const inputscore = document.querySelector('#score').value;
  if (validateForm(inputscore)) {
    AddscoreApi(inputname, inputscore).then(() => {
    // handle the response
      refreshpage();
      document.querySelector('#name').value = '';
      document.querySelector('#score').value = '';
      document.getElementById('error').innerText = '';
    });
  }
});

const refreshEl = document.getElementById('refresh');
refreshEl.addEventListener('click', () => {
  refreshEl.classList.add('clicked');
  refreshpage();
  setTimeout(() => {
    refreshEl.classList.remove('clicked');
  }, 800);
});
