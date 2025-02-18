/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 특정 index를 tail로 하는 곱의 최솟값
  let minProduct = nums[0];

  // 특정 index를 tail로 하는 곱의 최댓값
  let maxProduct = nums[0];

  let answer = Math.max(maxProduct, minProduct);
  for (let i = 1; i < nums.length; i++) {
    const maxTemp = maxProduct;
    const minTemp = minProduct;
    maxProduct = Math.max(maxTemp * nums[i], nums[i], minTemp * nums[i]);
    minProduct = Math.min(minTemp * nums[i], nums[i], maxTemp * nums[i]);

    answer = Math.max(maxProduct, answer);
  }

  return answer;
};