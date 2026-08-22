/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
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

        [heap[idx], heap[best]] = [heap[best], heap[idx]];

        idx = best;
      }

      return top;
    }
  }
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // lower
    [-1, 0], // upper
  ];

  const n = grid.length;
  const m = grid[0].length;

  const pq = new Heap((a, b) => a[2] - b[2]);
  pq.push([0, 0, 0]); // [x, y, initial_cost]

  const costs = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(Infinity),
  );
  costs[0][0] = 0;

  while (pq.size() > 0) {
    const [x, y, cost] = pq.pop();

    if (x === n - 1 && y === m - 1) return cost;

    if (costs[x][y] < cost) continue;

    const dir = grid[x][y] - 1;
    const [dx, dy] = directions[dir];
    const [nx, ny] = [x + dx, y + dy];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      if (costs[nx][ny] > cost) {
        pq.push([nx, ny, cost]);
        costs[nx][ny] = cost;
      }
    }

    for (const [dx, dy] of directions) {
      const [nx, ny] = [x + dx, y + dy];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (costs[nx][ny] > cost + 1) {
          pq.push([nx, ny, cost + 1]);
          costs[nx][ny] = cost + 1;
        }
      }
    }
  }
};