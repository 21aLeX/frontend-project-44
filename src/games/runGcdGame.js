import Math from 'math';
import index from '../index.js';

function nodFinding(a, b) {
  const whole = Math.trunc(a / b);
  if (a % (b * whole) !== 0) {
    return nodFinding(b, a - b * whole);
  }
  return b;
}

function funcCorrectAnsewr() {
  let correctAnsewr = '';
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const strQuestion = `${number1} ${number2}`;
  correctAnsewr = nodFinding(number1, number2);
  return [correctAnsewr, strQuestion];
}

export default function runGcdGame(cli) {
  const name = cli();
  console.log('Find the greatest common divisor of given numbers.');
  index(funcCorrectAnsewr, name);
}
