/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// Follow up: Could you find an algorithm that runs in O(m + n) time?

var minWindow = function (s, t) {
  const tObj = {};
  const tSet = new Set();
  for (let i = 0; i < t.length; i++) {
    tObj[t[i]] ? (tObj[t[i]] += 1) : (tObj[t[i]] = 1);
    tSet.add(t[i]);
  }

  let right = 0;
  const countObj = {};
  const curWindow = {};

  while (tSet.size) {
    countObj[s[right]] ? (countObj[s[right]] += 1) : (countObj[s[right]] = 1);

    curWindow[s[right]]
      ? (curWindow[s[right]] += 1)
      : (curWindow[s[right]] = 1);

    if (countObj[s[right]] === tObj[s[right]]) tSet.delete(s[right]);

    right++;

    if (right > s.length) return "";
  }

  let answer = s.slice(0, right);
  let left = 0;

  while (1) {
    if (answer.length > right - left) answer = s.slice(left, right);

    if (!tObj[s[left]]) {
      curWindow[s[left++]] -= 1;
    } else {
      if (curWindow[s[left]] > tObj[s[left]]) {
        curWindow[s[left++]] -= 1;
      } else {
        break;
      }
    }
  }

  if (right === s.length) return answer;

  for (let i = right; i < s.length; i++) {
    curWindow[s[i]] ? (curWindow[s[i]] += 1) : (curWindow[s[i]] = 1);

    // 필요 없는거 지우기
    while (1) {
      if (!tObj[s[left]]) {
        curWindow[s[left++]] -= 1;
      } else {
        if (curWindow[s[left]] > tObj[s[left]]) {
          curWindow[s[left++]] -= 1;
        } else {
          if (answer.length > i - left + 1) answer = s.slice(left, i + 1);
          break;
        }
      }
    }
  }

  return answer;
};