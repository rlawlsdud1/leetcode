/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let answer = 0;
  while (left <= right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    answer = Math.max(area, answer);

    // 작은쪽을 움직이는게 이득이다
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
};