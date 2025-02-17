/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let prev = points[0];
  const n = points.length;
  const m = points[0].length;

  for (let i = 1; i < n; i++) {
    const left = Array.from({ length: m });
    const right = Array.from({ length: m });
    const current = Array.from({ length: m });
    left[0] = prev[0];
    right[m - 1] = prev[m - 1];

    for (let j = 1; j < m; j++) {
      left[j] = Math.max(prev[j], left[j - 1] - 1);
    }

    for (let j = m - 2; j >= 0; j--) {
      right[j] = Math.max(prev[j], right[j + 1] - 1);
    }

    for (let j = 0; j < m; j++) {
      current[j] = Math.max(left[j], right[j]) + points[i][j];
    }

    prev = current;
  }

  return Math.max(...prev);
};