/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const dp = Array.from({ length: rowIndex + 1 }, () => []);

  for (let i = 0; i <= rowIndex; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }

  for (let i = 2; i <= rowIndex; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp[rowIndex];
};