import { readFile } from 'fs/promises';

const fileInput = await readFile('input', 'utf8');
const input = fileInput.split('\n').map((line) => +line);

const count = input.reduce(
  (sum, value, i) => sum + (i > 0 && input[i - 1] < value ? 1 : 0),
  0
);

console.log(count);
