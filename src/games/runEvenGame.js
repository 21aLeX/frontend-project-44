import readlineSync from 'readline-sync';
import engineGame from '../index.js';
import random from '../moduleRandom.js';

const evenFunction = (number) => {
  const answerEven = number % 2 === 0 ? 'yes' : 'no';
  return answerEven;
};
const funcCorrectAnsewr = () => {
  const number = random();
  const correctAnsewr = evenFunction(number);
  return [correctAnsewr, number];
};

export default function runEvenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  engineGame(funcCorrectAnsewr, name);
}
