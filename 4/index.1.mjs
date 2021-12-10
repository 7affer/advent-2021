import { readInput } from './readInput.mjs';
import {
  createPlayBoard,
  markBoard,
  checkBoard,
  calculateScore,
} from './boardFunctions.mjs';

const { numbers, boards } = await readInput('input');

let playBoards = boards.map(createPlayBoard);

let i = 0;
while (i < numbers.length) {
  const value = numbers[i];

  playBoards = playBoards.map((board) => markBoard(board, value));

  const winningBoard = playBoards.find((board) => checkBoard(board));
  if (winningBoard) {
    console.log(calculateScore(winningBoard, value));
    break;
  }

  i++;
}
