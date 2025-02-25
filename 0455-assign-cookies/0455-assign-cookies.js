/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let gIndex = 0,
    sIndex = 0,
    answer = 0;

  while (gIndex < g.length && sIndex < s.length) {
    if (g[gIndex] <= s[sIndex]) {
      answer++;
      gIndex++;
    }
    sIndex++;
  }

  return answer;
};