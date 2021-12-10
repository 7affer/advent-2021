export const flipBoard = (board) => {
  const flipped = [];

  board.forEach((row, rowIndex) => {
    board.forEach((col, colIndex) => {
      flipped[colIndex] = flipped[colIndex] || [];
      flipped[colIndex][rowIndex] = row[colIndex];
    });
  });

  return flipped;
};

export const createPlayBoard = (board) =>
  board.map((row) =>
    row.map((col) => ({
      marked: false,
      value: col,
    }))
  );

export const markBoard = (board, value) =>
  board.map((row) =>
    row.map((col) => ({
      ...col,
      marked: col.marked || col.value === value,
    }))
  );

export const checkBoard = (board) =>
  board.some((row) => row.every((col) => col.marked)) ||
  flipBoard(board).some((row) => row.every((col) => col.marked));

export const calculateScore = (board, value) =>
  value *
  board.reduce(
    (score, row) =>
      score +
      row.reduce((colScore, col) => colScore + (col.marked ? 0 : col.value), 0),
    0
  );

export const printBoard = (board) => {
  console.log('');
  board.forEach((row) => {
    console.log(
      row
        .map((col) => (col.marked ? 'X' : col.value.toString()).padStart(2))
        .join(' ')
    );
  });
};
