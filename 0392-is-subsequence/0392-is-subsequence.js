/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  // j < t.length 만 넣어도 되지만
  // i < s.length까지 추가해준 이유는
  // 조기 탈출을 가능케 하려고
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  if (i === s.length) {
    return true;
  }
  return false;
};