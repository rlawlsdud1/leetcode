/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let nonDupPointer = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[nonDupPointer] !== nums[i]) {
      nums[++nonDupPointer] = nums[i];
    }
  }

  return nonDupPointer + 1;
};