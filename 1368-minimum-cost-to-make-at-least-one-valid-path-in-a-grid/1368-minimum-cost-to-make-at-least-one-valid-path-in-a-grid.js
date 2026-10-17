/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
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
                const left = idx * 2 + 1
                const right = idx * 2 + 2

                if(left < heap.length && this.compare(heap[left], heap[best]) < 0) best = left
                if(right < heap.length && this.compare(heap[right], heap[best]) < 0) best = right

                if(idx === best) break

                [heap[best], heap[idx]] = [heap[idx], heap[best]]

                idx = best
            }

            return top
        }
    }

    function is_valid_point(n, m, x, y) {
        if(x >= 0 && y >= 0 && x < n && y < m) return true

        return false
    }

    const signs = {
        1 : [0, 1],
        2 : [0, -1],
        3 : [1, 0],
        4 : [-1, 0]
    }
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    const n = grid.length
    const m = grid[0].length

    const pq = new Heap((a, b) => a[2] - b[2])
    pq.push([0, 0, 0])

    const dist = Array.from({length : n}, () => Array.from({length : m}).fill(Infinity))
    dist[0][0] = 0

    while(pq.size() > 0) {
        const [x, y, cost] = pq.pop()

        if(x === n - 1 && y === m - 1) return cost

        if(cost > dist[x][y]) continue

        const sign = grid[x][y]

        // 결대로 가거나
        const [nx, ny] = [x + signs[sign][0], y + signs[sign][1]]
        if(is_valid_point(n, m, nx, ny)) {
            if(cost < dist[nx][ny]) {
                pq.push([nx, ny, cost])
                dist[nx][ny] = cost
            }
        }


        // 비용 들여서 방향 바꾸거나
        for(const direction of directions) {
            const [nx, ny] = [x + direction[0], y + direction[1]]

            if(is_valid_point(n, m, nx, ny)) {
                if(cost + 1 < dist[nx][ny]) {
                    pq.push([nx, ny, cost + 1])
                    dist[nx][ny] = cost + 1
                }
            }
        }
    }
};