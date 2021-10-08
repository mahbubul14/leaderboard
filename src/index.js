import './style.css';

let results = [];

const table = document.querySelector('.table');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7p06s7iTb0rdCtnItvZ9/scores/';
const yourName = document.getElementById('name');
const score = document.getElementById('score');
const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');

const produceResult = (results) => {
  const childEle = Array.from(document.querySelectorAll('.table div'));
  childEle.forEach((el) => {
    el.remove();
  });
  results.forEach((result) => {
    const content = `${result.user}: ${result.score}`;

    const list = document.createElement('div');
    list.className = 'list';
    list.innerText = content;
    table.appendChild(list);
  });
};

const sendScores = async () => {
  const response = await (await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: yourName.value,
      score: score.value,
    }),
  })).json();
  yourName.value = '';
  score.value = '';
  return response;
};

const getScores = async () => {
  const response = await (await fetch(url)).json();
  results = response.result;
  produceResult(results);
};

getScores();

submit.addEventListener('click', () => {
  sendScores();
});

refresh.addEventListener('click', () => {
  document.querySelector('.table').innerHtml = '';
  getScores();
});
