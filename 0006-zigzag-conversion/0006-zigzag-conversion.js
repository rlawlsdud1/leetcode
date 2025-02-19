/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const answerArr = Array.from({ length: numRows }, () => []);
  if (numRows === 1) {
    return s;
  }
  const countOfOneCycle = 2 * numRows - 2;
  let [x, y] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    // 대각 위로 움직이는 조건
    if (
      numRows <= i % countOfOneCycle &&
      i % countOfOneCycle < countOfOneCycle
    ) {
      answerArr[x][y] = s[i];
      --x;
      ++y;
    } else {
      answerArr[x][y] = s[i];
      if (x < numRows - 1) {
        x++;
      }
      if (i % countOfOneCycle === countOfOneCycle / 2) {
        --x;
        ++y;
      }
    }
  }

  let answer = "";
  answerArr.forEach((v) => {
    answer += v.join("");
  });
  return answer;
};