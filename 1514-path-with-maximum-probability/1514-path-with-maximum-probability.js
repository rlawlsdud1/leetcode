/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
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
  const graph = {};

  edges.forEach((v, i) => {
    const [a, b] = v;
    graph[a]
      ? graph[a].push([b, succProb[i]])
      : (graph[a] = [[b, succProb[i]]]);

    graph[b]
      ? graph[b].push([a, succProb[i]])
      : (graph[b] = [[a, succProb[i]]]);
  });

  const pq = new Heap((a, b) => b[1] - a[1]);
  pq.push([start_node, 1]);

  const probabilities = Array.from({ length: n }).fill(0);
  probabilities[start_node] = 1;

  while (pq.size() > 0) {
    const [node, probability] = pq.pop();

    if (probability < probabilities[node]) continue;

    for (const [adjacantNode, prob] of graph[node] || []) {
      const nextProb = probability * prob;

      if (nextProb > probabilities[adjacantNode]) {
        probabilities[adjacantNode] = nextProb;
        pq.push([adjacantNode, nextProb]);
      }
    }
  }

  return probabilities[end_node];
};
