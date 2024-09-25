const getTotalIsles = function (grid) {


  if (grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  let islandCount = 0;

  // Function to perform DFS and mark the connected 'L' cells as visited
  const dfs = (row, col) => {
    // Check for boundaries and whether the current cell is land ('L')
    if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === 'W') {
      return;
    }

    // Mark the land as visited by setting it to 'W' (water)
    grid[row][col] = 'W';

    // Explore neighboring land cells (up, down, left, right)
    dfs(row + 1, col); // down
    dfs(row - 1, col); // up
    dfs(row, col + 1); // right
    dfs(row, col - 1); // left
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