/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const majorityCnt = Math.ceil(nums.length / 2);

  let answer;
  const numObj = {};
  nums.forEach((num) => {
    numObj[num] ? (numObj[num] += 1) : (numObj[num] = 1);

    if (numObj[num] >= majorityCnt) answer = num;
  });

  return answer;
};