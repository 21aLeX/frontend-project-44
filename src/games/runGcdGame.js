import readlineSync from 'readline-sync';
import engineGame from '../index.js';
import random from '../moduleRandom.js';

const nodFinding = (a, b) => {
  const whole = Math.trunc(a / b);
  if (a % (b * whole) !== 0) {
    return nodFinding(b, a - b * whole);
  }
  return b;
};

const funcCorrectAnsewr = () => {
  const number1 = random();
  const number2 = random();
  const strQuestion = `${number1} ${number2}`;
  const correctAnsewr = `${nodFinding(number1, number2)}`;
  return [correctAnsewr, strQuestion];
};

export default function runGcdGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  engineGame(funcCorrectAnsewr, name);
}
