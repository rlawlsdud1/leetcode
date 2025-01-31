/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // 주어진 cost.length 만큼의 dp array을 만들자
  const dp = Array.from({ length: cost.length + 1 }).fill(Infinity);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
    if (i === cost.length) {
      dp[i] = Math.min(dp[i - 1], dp[i - 2]);
    }
  }
  return dp.at(-1);
};