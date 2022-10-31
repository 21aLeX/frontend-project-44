import readlineSync from 'readline-sync';

export default function template(correctAnsewr, strQuestion) {
  const str = ' is wrong answer ;(. Correct answer was ';
  console.log(`Question: ${strQuestion}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(correctAnsewr)) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}'${str}'${correctAnsewr}'.`);
  return "Let's try again, ";
}
