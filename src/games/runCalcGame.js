import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const calculate = (n1, n2, oper) => {
  switch (oper) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      throw Error;
  }
};

const generateData = () => {
  const arrOperator = ['+', '-', '*'];
  const number1 = generateRandom();
  const number2 = generateRandom();
  const operator = arrOperator[generateRandom(3, 0)];
  const strQuestion = `${number1} ${operator} ${number2}`;
  const correctAnswer = `${calculate(number1, number2, operator)}`;
  return [correctAnswer, strQuestion];
};

const runCalcGame = () => {
  const question = 'What is the result of the expression?';
  runEngineGame(generateData, question);
};
export default runCalcGame;
