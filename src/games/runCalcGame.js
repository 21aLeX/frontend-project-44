import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const arrOperator = ['+', '-', '*'];
const question = 'What is the result of the expression?';

const calculate = (n1, n2, oper) => {
  switch (oper) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      throw new Error('Error operator selection');
  }
};

const generateData = () => {
  const number1 = generateRandom();
  const number2 = generateRandom();
  const operator = arrOperator[generateRandom(arrOperator.length, 0)];
  const strQuestion = `${number1} ${operator} ${number2}`;
  const correctAnswer = `${calculate(number1, number2, operator)}`;
  return [correctAnswer, strQuestion];
};

const runCalcGame = () => {
  runEngineGame(generateData, question);
};
export default runCalcGame;
