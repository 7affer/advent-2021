import { readFile } from 'fs/promises';

const fileInput = await readFile('input', 'utf8');
const input = fileInput
  .split('\n')
  .map((line) => line.split('').map((digit) => +digit));

const flipped = [...new Array(input[0].length)].map(() => [
  ...new Array(input.length),
]);

for (let row = 0; row < input.length; row++) {
  for (let col = 0; col < input[row].length; col++) {
    flipped[col][row] = input[row][col];
  }
}

const gamma = flipped.map(bits => {
  const ones = bits.filter(bit => bit).length;
  const zeroes = bits.filter(bit => !bit).length;
  return +(ones > zeroes);
});

const epsilon = flipped.map(bits => {
  const ones = bits.filter(bit => bit).length;
  const zeroes = bits.filter(bit => !bit).length;
  return +!(ones > zeroes);
});

const gammaDecimal = Number.parseInt(gamma.join(''), 2);
const epsilonDecimal = Number.parseInt(epsilon.join(''), 2);

console.log(gammaDecimal * epsilonDecimal);