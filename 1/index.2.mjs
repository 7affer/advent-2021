import { readFile } from 'fs/promises';

const fileInput = await readFile('input', 'utf8');
const input = fileInput.split('\n').map((line) => +line);

const count = input.reduce((sum, _, i) => {
  if (i === 0 || i > input.length - 3) return sum;

  const prevWindow = input[i - 1] + input[i] + input[i + 1];
  const currentWindow = input[i] + input[i + 1] + input[i + 2];

  if (prevWindow < currentWindow) return sum + 1;

  return sum;
}, 0);

console.log(count);
