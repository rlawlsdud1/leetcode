var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // 배열 정렬
  const answer = [];

  for (let fixedPointer = 0; fixedPointer < nums.length - 2; fixedPointer++) {
    // 중복된 fixedPointer 건너뛰기
    if (fixedPointer > 0 && nums[fixedPointer] === nums[fixedPointer - 1]) continue;

    let left = fixedPointer + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[fixedPointer] + nums[left] + nums[right];

      if (sum === 0) {
        answer.push([nums[fixedPointer], nums[left], nums[right]]);
        // 중복된 left와 right 건너뛰기
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++; // 합이 작으면 left를 오른쪽으로 이동
      } else {
        right--; // 합이 크면 right를 왼쪽으로 이동
      }
    }
  }
  return answer;
};

console.log(threeSum([3, 0, -2, -1, 1, 2]));