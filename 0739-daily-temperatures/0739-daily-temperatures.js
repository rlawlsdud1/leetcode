/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = Array.from({ length: temperatures.length }).fill(0);
  const stack = [];

  temperatures.forEach((t, i) => {
    const cur = t;

    while (temperatures[stack.at(-1)] < cur) {
      answer[stack.at(-1)] = i - stack.at(-1);
      stack.pop();
    }

    stack.push(i);
  });

  answer.push();

  return answer;
};