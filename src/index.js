import 'lodash';
import './style.css';

const players = [
  {
    name: 'A',
    score: 100,
  },
  {
    name: 'B',
    score: 60,
  },
  {
    name: 'C',
    score: 40,
  },
  {
    name: 'D',
    score: 80,
  },
  {
    name: 'E',
    score: 90,
  },
];

const renderScores = () => {
  const list = document.getElementById('list');
  players.forEach((player) => {
    const { name, score } = player;
    const li = document.createElement('li');
    li.innerText = `${name} : ${score}`;
    list.appendChild(li);
  });
  return list;
};
renderScores();
