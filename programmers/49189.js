function solution(n, vertex) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const distances = Array(n + 1).fill(-1);
    distances[1] = 0;

    const queue = [1];
    while (queue.length > 0) {
        const current = queue.shift();
        for (let neighbor of graph[current]) {
            if (distances[neighbor] === -1) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    const maxDistance = Math.max(...distances);
    return distances.filter(distance => distance === maxDistance).length;
}
