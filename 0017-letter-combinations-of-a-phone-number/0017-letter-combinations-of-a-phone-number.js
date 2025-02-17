/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneObj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const answer = [];

  function DFS(index, path) {
    const target = phoneObj[digits[index]];
    if (index === digits.length) {
      if (path.length) {
        answer.push([...path].join(""));
      }
      return;
    }

    for (let i = 0; i < target.length; i++) {
      // 방문처리는 필요 없었다
      path.push(target[i]);
      DFS(index + 1, path);
      path.pop();
    }
  }

  DFS(0, []);

  return answer;
};