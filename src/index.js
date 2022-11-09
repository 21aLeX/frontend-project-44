import readlineSync from 'readline-sync';

export default function template(funcCorrectAnsewr, name) {
  let count = 0;
  while (count < 3) {
    const ansewrs = funcCorrectAnsewr();
    const correctAnsewr = ansewrs[0];
    const strQuestion = ansewrs[1];

    console.log(`Question: ${strQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnsewr)) {
      console.log('Correct!');
    } else {
      const str = ' is wrong answer ;(. Correct answer was ';
      console.log(`'${answer}'${str}'${correctAnsewr}'.`);
      return `Let's try again, ${name}`;
    }
    count += 1;
  }
  return `Congratulations, ${name}!`;
}
