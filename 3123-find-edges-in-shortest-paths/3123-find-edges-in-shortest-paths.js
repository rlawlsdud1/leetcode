/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean[]}
 */
var findAnswer = function(n, edges) {
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

                if(left < heap.length && this.compare(heap[left], heap[best]) < 0) best = left
                if(right < heap.length && this.compare(heap[right], heap[best]) < 0) best = right

                if(idx === best) break

                [heap[best], heap[idx]] = [heap[idx], heap[best]]

                idx = best
            }

            return top
        }
    }

    const graph = {}

    edges.forEach((v) => {
        const [a, b, w] = v

        graph[a] ? graph[a].push([b, w]) : graph[a] = [[b, w]]
        graph[b] ? graph[b].push([a, w]) : graph[b] = [[a, w]]
    })

    function dijkstra(dist, start, graph) {
        const pq = new Heap((a, b) => a[1] - b[1])
        pq.push([start, 0])

        dist[start] = 0

        while(pq.size() > 0) {
            const [node, cost] = pq.pop()

            if(cost > dist[node]) continue

            for(const [next, weight] of graph[node] || []) {
                const nextCost = cost + weight

                if(nextCost < dist[next]) {
                    pq.push([next, nextCost])
                    dist[next] = nextCost
                }
            }
        }
    }

    const dist_from_start = Array.from({length : n}).fill(Infinity)
    const dist_from_end = Array.from({length : n}).fill(Infinity)

    dijkstra(dist_from_start, 0, graph)
    dijkstra(dist_from_end, n - 1, graph)

    const distance = dist_from_start[n - 1]
    const m = edges.length

    if(distance === Infinity) return Array.from({length : m}).fill(false)
    
    const answer = Array.from({length : m}).fill(false)

    edges.forEach((v, i) => {
        const [a, b, w] = v

        if(dist_from_start[a] + w + dist_from_end[b] === distance) answer[i] = true
        else if(dist_from_start[b] + w + dist_from_end[a] === distance) answer[i] = true
    })

    return answer
};