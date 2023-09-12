function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;
  const xMax = grid.length;
  const yMax = grid[0].length;
  // helper function, start searching every time you hit a 1, DFS in everything
  const dfs = (x: number, y: number) => {
    // change your value to 0, then check if any of them are valid
    if (grid[x][y] == 0) return 0;
    grid[x][y] = 0;
    let curr = 1;
    const directions = [
      [x - 1, y],
      [x + 1, y],
      [x, y + 1],
      [x, y - 1],
    ];
    for (const coords of directions) {
      const tempX = coords[0];
      const tempY = coords[1];
      // add the current values here
      if (tempX < xMax && tempX >= 0 && tempY < yMax && tempY >= 0) {
        curr += dfs(tempX, tempY);
      }
    }
    return curr;
  };
  for (let i = 0; i < xMax; i++) {
    for (let j = 0; j < yMax; j++) {
      max = Math.max(dfs(i, j), max);
    }
  }
  return max;
}
