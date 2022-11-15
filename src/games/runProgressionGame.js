import readlineSync from 'readline-sync';
import engineGame from '../index.js';
import random from '../moduleRandom.js';

const generationProgression = () => {
  const array = [random()];
  const sizeArray = Math.floor(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
  const step = Math.floor(Math.floor(Math.random() * 10) + 1);
  for (let i = 1; i < sizeArray; i += 1) {
    array.push(array[i - 1] + step);
  }
  return array;
};
const funcCorrectAnsewr = () => {
  let correctAnsewr = '';
  let strQuestion = '';
  const array = generationProgression();
  const sizeArray = array.length;
  const element = Math.floor(Math.floor(Math.random() * (sizeArray - 1)) + 1);
  for (let i = 0; i < sizeArray; i += 1) {
    if (i === element) {
      correctAnsewr = `${array[i]}`;
      strQuestion += '.. ';
    } else {
      strQuestion += `${array[i]} `;
    }
  }
  return [correctAnsewr, strQuestion];
};

export default function runProgressionGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  engineGame(funcCorrectAnsewr, name);
}
