/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
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

    const n = grid.length
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    const dist = Array.from({length : n} , () => Array.from({length : n}).fill(Infinity))
    dist[0][0] = grid[0][0]

    const pq = new Heap((a, b) => a[2] - b[2])
    pq.push([0, 0, grid[0][0]])

    while(pq.size() > 0) {
        const [x, y, cost] = pq.pop()

        if(cost > dist[x][y]) continue

        for(const direction of directions) {
            const [nx, ny] = [x + direction[0], y + direction[1]]

            if(nx >=0 && ny >= 0 && nx < n && ny < n) {
                const nextCost = Math.max(cost, grid[nx][ny])

                if(nextCost < dist[nx][ny]) {
                    dist[nx][ny] = nextCost
                    pq.push([nx, ny, nextCost])
                }
            }
        }
    }

    return dist[n - 1][n - 1]
};