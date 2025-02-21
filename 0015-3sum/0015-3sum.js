/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = new Set();

  for (let fixedPointer = 0; fixedPointer < nums.length - 2; fixedPointer++) {
    let left = fixedPointer + 1,
      right = nums.length - 1,
      sum = nums[fixedPointer];

    while (left < right) {
      sum += nums[left];
      sum += nums[right];

      if (sum === 0) {
        answer.add([nums[fixedPointer], nums[left], nums[right]].join(","));
        sum -= nums[right--];
        sum -= nums[left];
      } else if (sum > 0) {
        sum -= nums[right--];
        sum -= nums[left];
      } else {
        sum -= nums[left++];
        sum -= nums[right];
      }
    }
  }
  return [...answer].map((v) => v.split(",").map(Number));
};