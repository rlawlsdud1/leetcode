/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  class Heap {
    constructor(compare) {
      this.heap = [];
      this.compare = compare;
    }

    size() {
      return this.heap.length;
    }

    push(value) {
      const heap = this.heap;
      heap.push(value);

      let idx = heap.length - 1;
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (this.compare(heap[parent], heap[idx]) <= 0) break;
        [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
        idx = parent;
      }
    }

    pop() {
      const heap = this.heap;

      if (heap.length === 0) return undefined;
      if (heap.length === 1) return heap.pop();

      const top = heap[0];
      heap[0] = heap.pop();

      let idx = 0;
      while (1) {
        let best = idx;
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;

        if (left < heap.length && this.compare(heap[left], heap[best]) < 0)
          best = left;
        if (right < heap.length && this.compare(heap[right], heap[best]) < 0)
          best = right;

        if (idx === best) break;

        [heap[best], heap[idx]] = [heap[idx], heap[best]];

        idx = best;
      }

      return top;
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const n = heights.length;
  const m = heights[0].length;

  const pq = new Heap((a, b) => a[2] - b[2]);
  pq.push([0, 0, 0]);

  const efforts = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(Infinity),
  );
  efforts[0][0] = 0;

  while (pq.size() > 0) {
    const [x, y, effort] = pq.pop();

    if (effort > efforts[x][y]) continue;

    for (const [dx, dy] of directions) {
      const [nx, ny] = [x + dx, y + dy];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        const diff = Math.abs(heights[nx][ny] - heights[x][y]);
        const nextEffort = Math.max(effort, diff);

        if (nextEffort < efforts[nx][ny]) {
          efforts[nx][ny] = nextEffort;
          pq.push([nx, ny, nextEffort]);
        }
      }
    }
  }

  return efforts[n - 1][m - 1];
};