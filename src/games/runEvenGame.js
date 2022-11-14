import readlineSync from 'readline-sync';
import index from '../index.js';

const funcCorrectAnsewr = () => {
  let correctAnsewr = '';
  const number = Math.floor(Math.random() * 100);
  correctAnsewr = number % 2 === 0 ? 'yes' : 'no';
  return [correctAnsewr, number];
};

export default function runEvenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  index(funcCorrectAnsewr, name);
}
