/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const difference = [];
  for (let i = 0; i < gas.length; i++) {
    difference[i] = gas[i] - cost[i];
  }

  const sumOfDiffer = difference.reduce((acc, cur) => acc + cur, 0);
  if (sumOfDiffer < 0) return -1;

  let start = 0;
  let sum = 0;
  for (let i = 0; i < difference.length; i++) {
    sum += difference[i];
    if (sum < 0) {
      start = i + 1;
      sum = 0;
    }
  }

  return start;
};