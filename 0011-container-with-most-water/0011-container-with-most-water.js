/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    answer = 0;

  while (left <= right) {
    answer = Math.max(
      answer,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return answer;
};