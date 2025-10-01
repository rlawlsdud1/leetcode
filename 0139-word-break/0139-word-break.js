/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordDictObj = {};
  wordDict.forEach((v) => (wordDictObj[v] = true));

  const memo = {};

  function DFS(index) {
    if (index === s.length) return true;
    if (memo[index] !== undefined) return memo[index];

    let temp = "";
    for (let i = index; i < s.length; i++) {
      temp += s[i];

      if (wordDictObj[temp] && DFS(i + 1)) {
        return (memo[index] = true);
      }
    }

    return (memo[index] = false);
  }

  return DFS(0);
};