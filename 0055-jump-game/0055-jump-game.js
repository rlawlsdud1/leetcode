/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // max는 가장 멀리 뻗을 수 있는 index를 의미한다
  let maxIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    maxIdx = Math.max(maxIdx, nums[i] + i);
    if (maxIdx >= nums.length - 1) return true;
    if (maxIdx === i && nums[i] === 0) return false;
  }
};
