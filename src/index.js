import readlineSync from 'readline-sync';

export default function template(generationData, name) {
  for (let i = 0; i < 3; i += 1) {
    const answers = generationData();
    const [correctAnsewr, strQuestion] = answers;

    console.log(`Question: ${strQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnsewr)) {
      console.log('Correct!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnsewr}.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
