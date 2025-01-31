/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const [n, m] = [grid.length, grid[0].length];
  const dp = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));
  dp[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }
  for (let j = 1; j < n; j++) {
    dp[j][0] = grid[j][0] + dp[j - 1][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
    }
  }

  return dp[n - 1][m - 1];
};