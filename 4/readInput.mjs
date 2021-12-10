import { readFile } from 'fs/promises';

export async function readInput(fileName) {
  const fileInput = await readFile(fileName, 'utf8');
  const numbers = fileInput.split('\n')[0].split(',').map(Number);
  const boards = fileInput
    .split('\n')
    .filter((_, i) => i > 0)
    .map((line) => line.split(' ').filter(Boolean).map(Number))
    .filter((line) => line.length === 5)
    .reduce(
      (prev, cuerrent) => {
        if (prev[prev.length - 1].length < 5) {
          prev[prev.length - 1].push(cuerrent);
        } else {
          prev.push([cuerrent]);
        }
        return prev;
      },
      [[]]
    );

  return { numbers, boards };
}
