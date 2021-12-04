import { readFile } from 'fs/promises';

const fileInput = await readFile('input', 'utf8');
const input = fileInput.split('\n').map((line) => {
  const [dirr, count] = line.split(' ');
  return { dirr, count: +count };
});

let horizontal = 0;
let depth = 0;
let aim = 0;

for (const { dirr, count } of input) {
  switch (dirr) {
    case 'up':
      aim -= count;
      break;
    case 'down':
      aim += count;
      break;
    case 'forward':
      depth += count * aim;
      horizontal += count;
      break;
  }
}

console.log({ horizontal, depth });
console.log(horizontal * depth);
