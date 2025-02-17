/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const candidate = [];

  function DFS(combi, count) {
    if (count === 2 * n) {
      candidate.push(combi.split(""));
      return;
    } else {
      DFS(combi + "(", count + 1);
      DFS(combi + ")", count + 1);
    }
  }

  DFS("(", 1);

  const answer = [];
  candidate.forEach((v) => {
    if (checkWellFormed(v)) {
      answer.push(v.join(""));
    }
  });

  return answer;
};

function checkWellFormed(arr) {
  const stack = [];
  arr.forEach((v) => {
    if (stack.at(-1) === "(" && v === ")") {
      stack.pop();
    } else {
      stack.push(v);
    }
  });
  if (stack.length) {
    return false;
  }
  return true;
}