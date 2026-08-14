var findCheapestPrice = function (n, flights, src, dst, k) {
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

  const pq = new Heap((a, b) => a[1] - b[1]);
  pq.push([src, 0, 0]);

  const dist = Array.from({ length: n }, () =>
    Array.from({ length: n }).fill(Infinity),
  );
  dist[src][0] = 0;

  const graph = {};
  flights.forEach((v) => {
    const [a, b, cost] = v;
    graph[a] ? graph[a].push([b, cost]) : (graph[a] = [[b, cost]]);
  });

  while (pq.size() > 0) {
    const [node, cost, count] = pq.pop();

    if (node === dst) return cost;

    if (dist[node][count] < cost) continue;

    if (count > k) continue;

    for (const [next, weight] of graph[node] || []) {
      const nextCost = cost + weight;

      if (nextCost < dist[next][count + 1]) {
        dist[next][count + 1] = nextCost;
        pq.push([next, nextCost, count + 1]);
      }
    }
  }

  return -1;
};