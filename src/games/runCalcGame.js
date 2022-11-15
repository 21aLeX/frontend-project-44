import readlineSync from 'readline-sync';
import engineGame from '../index.js';
import random from '../moduleRandom.js';

const calculation = (n1, n2, oper) => {
  switch (oper) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return 'Error operation';
  }
};

const funcCorrectAnsewr = () => {
  const arrOperator = ['+', '-', '*'];
  const number1 = random();
  const number2 = random();
  const operator = arrOperator[Math.floor(Math.random() * 3)];
  const strQuestion = `${number1} ${operator} ${number2}`;
  const correctAnsewr = `${calculation(number1, number2, operator)}`;
  return [correctAnsewr, strQuestion];
};

export default function runCalcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  try {
    engineGame(funcCorrectAnsewr, name);
  } catch (e) {
    console.log(e);
  }
}
