/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({ length: amount + 1 }).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    let minCount = Infinity;
    for (let coin of coins) {
      if (i - coin >= 0) {
        minCount = Math.min(minCount, dp[i - coin] + 1);
      }
    }
    dp[i] = minCount;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};