import runEngineGame from '../index.js';
import generateRandom from '../moduleRandom.js';

const question = 'What number is missing in the progression?';
const minCount = 5;
const maxCount = 10;

const generateProgression = (sizeArray, step) => {
  // немного не поняла смысл фразы "здесь первый элемент прогрессии тоже лучше /сделать параметром/"
  const array = [];
  array.push(generateRandom());
  for (let i = 1; i < sizeArray; i += 1) {
    array.push(array[i - 1] + step);
  }
  return array;
};
const generateData = () => {
  const sizeArray = generateRandom(minCount, maxCount);
  const step = generateRandom(1, maxCount);
  const array = generateProgression(sizeArray, step);
  const element = generateRandom(0, sizeArray - 1);
  const correctAnswer = array[element];
  console.log(sizeArray, element);
  array[element] = '..';
  const strQuestion = array.join(' ');
  return [correctAnswer, strQuestion];
};

const runProgressionGame = () => {
  runEngineGame(generateData, question);
};
export default runProgressionGame;
