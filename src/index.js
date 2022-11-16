import readlineSync from 'readline-sync';

const runEngineGame = (generateData, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  const countCycle = 3;
  for (let i = 0; i < countCycle; i += 1) {
    const answers = generateData();
    const [correctAnswer, strQuestion] = answers;

    console.log(`Question: ${strQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runEngineGame;
