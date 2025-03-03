/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 순서 상관 없다고 했으므로, 정렬하고 시작하자
  nums.sort((a, b) => a - b);
  const answer = new Set();

  for (let pointer = 0; pointer < nums.length - 2; pointer++) {
    let left = pointer + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[pointer] + nums[left] + nums[right];
      if (sum === 0) {
        answer.add([nums[pointer], nums[left], nums[right]].join(","));
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return [...answer].map((v) => v.split(",").map(Number));
};