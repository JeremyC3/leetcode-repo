function isValidSudoku(board: string[][]): boolean {
  // check horizontally, check vertically, check 3x3
  const rowCheck: Set<string>[] = new Array(9)
    .fill("")
    .map(() => new Set<string>());
  const colCheck: Set<string>[] = new Array(9)
    .fill("")
    .map(() => new Set<string>());
  const triBox: Set<string>[][] = new Array(3)
    .fill("")
    .map(() => new Array(3).fill("").map(() => new Set<string>()));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const square = board[i][j];
      if (square === ".") continue;
      const boxRow = Math.floor(i / 3);
      const boxCol = Math.floor(j / 3);
      if (
        rowCheck[i].has(square) ||
        colCheck[j].has(square) ||
        triBox[boxRow][boxCol].has(square)
      ) {
        return false;
      }
      rowCheck[i].add(square);
      colCheck[j].add(square);
      triBox[boxRow][boxCol].add(square);
    }
  }
  return true;
}

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
