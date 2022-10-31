import readlineSync from 'readline-sync';
import Math from 'math';
import index from '../src/index.js';

export default function expression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');
  let countAnswer = 0;
  let correctAnsewr = '';
  const arrOperator = ['+', '-', '*'];
  while (countAnswer !== 3) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operator = arrOperator[Math.floor(Math.random() * 3)];
    const strQuestion = `${number1} ${operator} ${number2}`;
    switch (operator) {
      case '+':
        correctAnsewr = number1 + number2;
        break;
      case '-':
        correctAnsewr = number1 - number2;
        break;
      default:
        correctAnsewr = number1 * number2;
        break;
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
