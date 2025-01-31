/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({ length: amount + 1 }).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let minValue = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        minValue = Math.min(minValue, dp[i - coins[j]]);
      }
    }
    if (minValue !== Infinity) {
      dp[i] = minValue + 1;
    }
  }
  if (dp[amount] !== Infinity) return dp[amount];
  else return -1;
};