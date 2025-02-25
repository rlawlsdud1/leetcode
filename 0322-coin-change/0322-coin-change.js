/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // dp[i] 는 i원을 만들 수 있는 최소 개수 조합
  // dp[i] = Math.min(dp[i-1], dp[i-2], dp[i-2]) + 1

  const dp = Array.from({ length: amount + 1 }).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  if (dp.at(-1) === Infinity) return -1;
  return dp.at(-1);
};