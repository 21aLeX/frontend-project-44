import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const generateProgression = (sizeArray, step) => {
  const array = [generateRandom()];
  for (let i = 1; i < sizeArray; i += 1) {
    array.push(array[i - 1] + step);
  }
  return array;
};
const generateData = () => {
  let strQuestion = '';
  const sizeArray = Math.floor(generateRandom(0, 6) + 5);
  const step = Math.floor(Math.floor(Math.random() * 10) + 1);
  const array = generateProgression(sizeArray, step);
  const element = Math.floor(generateRandom(-1, sizeArray) + 1);
  const correctAnswer = array[element];
  array[element] = '..';
  strQuestion = array.join(' ');
  return [correctAnswer, strQuestion];
};

const runProgressionGame = () => {
  const question = 'What number is missing in the progression?';
  runEngineGame(generateData, question);
};
export default runProgressionGame;
