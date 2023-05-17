import './style.css';
import Score from './modules/scores.js';
import { getScores, addScores } from './modules/addscores.js';
import render from './modules/render.js';

document.addEventListener('DOMContentLoaded', render());
const addbtn = document.getElementById('submitbtn');
const refresh = document.getElementById('refresh');

addbtn.addEventListener('click', () => {
  const inputname = document.querySelector('#name').value;
  const inputscore = document.querySelector('#score').value;
  const newscore = new Score(inputname, inputscore);
  addScores(newscore);
  render();
});

refresh.addEventListener('click', () => {
  getScores();
});