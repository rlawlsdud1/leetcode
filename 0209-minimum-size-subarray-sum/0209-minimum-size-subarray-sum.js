/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    length = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      if (sum >= target) {
        length = Math.min(length, right - left + 1);
      }

      sum -= nums[left++];
    }
  }
  if (length === Infinity) return 0;
  return length;
};