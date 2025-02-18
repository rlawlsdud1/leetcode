/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dp = Array.from({ length: nums.length }).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) {
      for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
        dp[j] = true;
      }
    }
  }

  return dp[nums.length - 1];
};