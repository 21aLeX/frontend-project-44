import Math from 'math';
import index from '../index.js';

function funcCorrectAnsewr() {
  let correctAnsewr = '';
  const arrOperator = ['+', '-', '*'];
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
  return [correctAnsewr, strQuestion];
}

export default function runCalcGame(cli) {
  const name = cli();
  console.log('What is the result of the expression?');
  console.log(index(funcCorrectAnsewr, name));
}
