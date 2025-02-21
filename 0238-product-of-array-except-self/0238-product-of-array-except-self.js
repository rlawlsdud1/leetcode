/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const before = Array.from({ length: nums.length });
  const after = Array.from({ length: nums.length });

  before[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    before[i] = nums[i] * before[i - 1];
  }

  after[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    after[i] = nums[i] * after[i + 1];
  }

  const answer = Array.from({ length: nums.length });

  answer[0] = after[1];
  answer[nums.length - 1] = before[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    answer[i] = before[i - 1] * after[i + 1];
  }

  return answer;
};