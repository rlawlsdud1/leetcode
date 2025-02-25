/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = Array.from({ length: n + 2 }).fill(0);
  dp[1] = 1;

  for (let i = 2; i < n + 2; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n + 1];
};