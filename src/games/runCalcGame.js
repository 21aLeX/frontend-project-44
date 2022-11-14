import readlineSync from 'readline-sync';
import index from '../index.js';

const calculation = () => {
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
};

const funcCorrectAnsewr = () => {
  let correctAnsewr = '';
  const arrOperator = ['+', '-', '*'];
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const operator = arrOperator[Math.floor(Math.random() * 3)];
  const strQuestion = `${number1} ${operator} ${number2}`;
  cal
  return [correctAnsewr, strQuestion];
};

export default function runCalcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  index(funcCorrectAnsewr, name);
}
