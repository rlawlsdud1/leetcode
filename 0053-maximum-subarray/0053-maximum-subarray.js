/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i] 는 nums[i] 를 tail로 하는 subarray의 largest sum
  const dp = Array.from({ length: nums.length }).fill(-Infinity);

  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // Math.max(nums[i] 를 더해준 것, 새로 시작한 것)
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  return Math.max(...dp);
};