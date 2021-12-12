import { readInput } from './readInput.mjs';
import {
  createPlayBoard,
  markBoard,
  checkBoard,
  calculateScore,
  printBoard,
} from './boardFunctions.mjs';

const { numbers, boards } = await readInput('sample');

let playBoards = boards.map(createPlayBoard);

const winningBoards = [];
let lastWinningScore = 0;

let i = 0;
while (i < numbers.length) {
  const value = numbers[i];

  // Check numbers
  playBoards = playBoards.map((board) => markBoard(board, value));

  const winningBoard = playBoards.find(checkBoard);
  if (winningBoard) {
    lastWinningScore = calculateScore(winningBoard, value);
    // printBoard(winningBoard, value);
  }

  // filter out winning
  playBoards = playBoards.filter((board) => !checkBoard(board));

  if (winningBoards.length === boards.length) break;
  i++;
}

console.log(lastWinningScore);
