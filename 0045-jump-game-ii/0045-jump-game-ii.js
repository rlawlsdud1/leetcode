/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // dp[i] 는 i번째까지 도달하기 위한 최소 카운팅
  const dp = Array.from({ length: nums.length }).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }

  return dp.at(-1);
};