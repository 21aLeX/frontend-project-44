import readlineSync from 'readline-sync';
import Math from 'math';
import index from '../src/index.js';

export default function progression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let countAnswer = 0;
  let correctAnsewr = '';
  while (countAnswer !== 3) {
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
    const indexAnswer = index(correctAnsewr, strQuestion);
    if (indexAnswer === 1) {
      countAnswer += 1;
    } else {
      return `${indexAnswer}${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
}
