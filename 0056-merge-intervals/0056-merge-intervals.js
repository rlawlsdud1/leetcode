/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const answer = [];
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  intervals.push([Infinity, Infinity]);
  let prevStart, prevEnd;

  intervals.forEach((interval) => {
    const [start, end] = interval;

    if (start <= prevEnd) {
      prevEnd = Math.max(prevEnd, end);
    } else {
      answer.push([prevStart, prevEnd]);
      prevStart = start;
      prevEnd = end;
    }
  });

  return answer.slice(1);
};