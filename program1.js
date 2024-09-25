const getTotalIsles = function (grid) {


  if (grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  let islandCount = 0;

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === 'W') {
      return;
    }

    grid[row][col] = 'W';

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  // Iterate through the entire grid to find unvisited land
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 'L') {
        // Found a new island, perform DFS to mark all connected land
        islandCount++;
        dfs(row, col);
      }
    }
  }

  return islandCount;

};

module.exports = getTotalIsles;