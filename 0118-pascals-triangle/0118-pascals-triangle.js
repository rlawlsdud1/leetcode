/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const dp = Array.from({ length: numRows }, () => []);
  for (let i = 0; i < numRows; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
