/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // 고정 크기 sliding window

  let [left, right] = [0, k - 1];
  let answer = Infinity;
  let count = blocks
    .split("")
    .slice(0, k)
    .filter((v) => v === "W").length;

  while (right < blocks.length) {
    answer = Math.min(answer, count);
    if (blocks[left++] === "W") count--;
    if (blocks[++right] === "W") count++;
  }

  return answer;
};