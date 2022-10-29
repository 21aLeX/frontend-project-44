import readlineSync from 'readline-sync';
import Math from 'math';

function parity() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let countAnswer = 0;
  let correctAnsewr = '';
  const str = ' is wrong answer ;(. Correct answer was ';
  while (countAnswer !== 3) {
    const number = Math.floor(Math.random() * 100);
    correctAnsewr = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnsewr) {
      console.log('Correct!');
      countAnswer += 1;
    } else {
      console.log(`'${answer}'${str}'${correctAnsewr}'.`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
}
export default parity();
