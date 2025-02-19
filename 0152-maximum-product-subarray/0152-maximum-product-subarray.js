/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMax = maxProduct;
    let tempMin = minProduct;

    maxProduct = Math.max(tempMax * nums[i], nums[i], tempMin * nums[i]);
    minProduct = Math.min(tempMax * nums[i], nums[i], tempMin * nums[i]);
    answer = Math.max(maxProduct, answer);
  }

  return answer;
};