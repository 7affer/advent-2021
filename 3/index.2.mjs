import { on } from 'events';
import { readFile } from 'fs/promises';

const fileInput = await readFile('input', 'utf8');
const input = fileInput
  .split('\n')
  .map((line) => line.split('').map((digit) => +digit));

const getCommonBit = (collection, index) => {
  const ones = collection.filter((item) => item[index]).length;
  const zeroes = collection.length - ones;
  return +(ones >= zeroes);
};

const filterCollection = (collection, index, filterBy) =>
  collection.filter((item) => item[index] === filterBy);

const filterIncrementaly = (collection, flip, index = -1) => {
  if (collection.length === 1) return collection[0];

  const commonBit = getCommonBit(collection, index + 1);

  return filterIncrementaly(
    filterCollection(collection, index + 1, +(flip ? !commonBit : commonBit)),
    flip,
    index + 1
  );
};

console.log(
  Number.parseInt(filterIncrementaly(input, true).join(''), 2) *
  Number.parseInt(filterIncrementaly(input, false).join(''), 2)
);

