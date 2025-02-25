/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [findStart(nums, target), findEnd(nums, target)];
};

function findStart(nums, target) {
  let left = 0,
    right = nums.length - 1,
    start = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return start;
}

function findEnd(nums, target) {
  let left = 0,
    right = nums.length - 1,
    end = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return end;
}