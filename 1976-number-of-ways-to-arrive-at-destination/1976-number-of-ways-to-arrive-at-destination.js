/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    class Heap {
        constructor(compare) {
            this.heap = []
            this.compare = compare
        }

        size() {
            return this.heap.length
        }

        push(value) {
            const heap = this.heap
            heap.push(value)

            let idx = heap.length - 1

            while(idx > 0) {
                const parent = Math.floor((idx - 1) / 2)
                if(this.compare(heap[parent], heap[idx]) <= 0) break
                [heap[parent], heap[idx]] = [heap[idx], heap[parent]]
                idx = parent
            }
        }

        pop() {
            const heap = this.heap

            if(heap.length === 0) return undefined
            if(heap.length === 1) return heap.pop()

            const top = heap[0]
            heap[0] = heap.pop()

            let idx = 0

            while(1) {
                let best = idx
                const left = 2 * idx + 1
                const right = 2 * idx + 2

                if(left < heap.length && this.compare(heap[left], heap[best]) <= 0) best = left
                if(right < heap.length && this.compare(heap[right], heap[best]) <= 0) best = right

                if(idx === best) break

                [heap[best], heap[idx]] = [heap[idx], heap[best]]

                idx = best
            }

            return top
        }
    }

    const graph = {}

    roads.forEach((v) => {
        const [a, b, t] = v

        graph[a] ? graph[a].push([b, t]) : graph[a] = [[b, t]]
        graph[b] ? graph[b].push([a, t]) : graph[b] = [[a, t]]
    })

    const pq = new Heap((a, b) => a[1] - b[1])
    pq.push([0, 0])
    
    const dist = Array.from({length : n}).fill(Infinity)
    dist[0] = 0

    const ways = Array.from({length : n}).fill(0)
    ways[0] = 1

    const MOD = 10 ** 9 + 7;

    while(pq.size() > 0) {
        const [node, cost] = pq.pop()

        if(cost > dist[node]) continue

        for(const [next, weight] of graph[node] || []) {
            const nextCost = cost + weight

            if(nextCost < dist[next]) {
                dist[next] = nextCost
                pq.push([next, nextCost])
                ways[next] = ways[node]
            }else if(nextCost === dist[next]) {
                ways[next] = (ways[next] + ways[node]) % MOD
            }
        }
    }

    return ways[n - 1]
};