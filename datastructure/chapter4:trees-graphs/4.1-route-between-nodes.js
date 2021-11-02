function bfs(graph, start, target){
    if(start === target) return true;

    let queue = [start];
    let visited = new Set();

    while(queue.length){
        let currentNode = queue.shift();
        for(let neighbour of graph[currentNode]){
            if(neighbour === target) return true;
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour)
            }
        }
    }
    return false
}


function dfs(graph, start, target, visited = new Set()){
    if(start === target) return true
    visited.add(start)
    for(let neighbour of graph[start]){
        if(neighbour === target) {return true;}
        if(!visited.has(neighbour)){
            return dfs(graph, neighbour, target, visited)
        }
    }
    return false
}
    


let graph = {
    'a': ['b', 'e'],
    'b': ['e', 's'],
    'e': ['f'],
    'f': ['b'],
    's': ['f'],
    'r': []
}

console.log(dfs(graph, 'f', 'a'))




