import Math from 'math';
import index from '../index.js';

function funcCorrectAnsewr() {
  let correctAnsewr = '';
  const array = [Math.floor(Math.random() * 100)];
  const sizeArray = Math.floor(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
  const step = Math.floor(Math.floor(Math.random() * 10) + 1);
  const element = Math.floor(Math.floor(Math.random() * (sizeArray - 1)) + 1);
  let strQuestion = `${array} `;
  for (let i = 1; i < sizeArray; i += 1) {
    array.push(array[i - 1] + step);
    if (i === element) {
      correctAnsewr = array[i];
      strQuestion += '.. ';
    } else {
      strQuestion += `${array[i]} `;
    }
  }
  return [correctAnsewr, strQuestion];
}

export default function runProgressionGame(cli) {
  const name = cli();
  console.log('What number is missing in the progression?');
  console.log(index(funcCorrectAnsewr, name));
}
