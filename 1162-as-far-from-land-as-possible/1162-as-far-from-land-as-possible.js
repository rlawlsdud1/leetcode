/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
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
        const left = 2 * idx + 1;
        const right = 2 * idx + 2;

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

  const n = grid.length;
  const m = grid[0].length;
  const pq = new Heap((a, b) => a[1] - b[1]);
  const dist = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(Infinity),
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const cur = grid[i][j];

      if (cur === 1) {
        pq.push([i, j, 0]);
        dist[i][j] = 0;
      }
    }
  }

  while (pq.size() > 0) {
    const [x, y, distance] = pq.pop();

    if (distance > dist[x][y]) continue;

    for (const [dx, dy] of directions) {
      const [nx, ny] = [x + dx, y + dy];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && !grid[nx][ny]) {
        if (distance + 1 < dist[nx][ny]) {
          dist[nx][ny] = distance + 1;
          pq.push([nx, ny, distance + 1]);
        }
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, ...dist[i]);
  }

  return answer === 0 || answer === Infinity ? -1 : answer;
};