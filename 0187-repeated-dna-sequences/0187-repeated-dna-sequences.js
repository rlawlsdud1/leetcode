/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length <= 10) return [];

  const answer = new Set();

  let curWindow = "";
  const windowObj = {};

  for (let i = 0; i < s.length; i++) {
    curWindow = s.slice(i, i + 10);
    if (windowObj[curWindow]) answer.add(curWindow);
    else windowObj[curWindow] = 1;
  }

  return [...answer];
};