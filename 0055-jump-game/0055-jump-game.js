/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // dp[i] 는 i번째에 도달할 수 있는지를 기록하는 table
  const dp = Array.from({ length: nums.length }).fill(false);
  dp[0] = true; // 0번 index에서 출발한다고 했으므로

  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) {
      for (let j = i; j < Math.min(nums.length, i + 1 + nums[i]); j++) {
        dp[j] = true;

        if (dp[nums.length - 1]) return true;
      }
    }
  }
  return false;
};