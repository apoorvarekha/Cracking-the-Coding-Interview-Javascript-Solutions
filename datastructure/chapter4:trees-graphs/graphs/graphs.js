
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

let adjacencyList = new Map();

function addNode(airport){
    adjacencyList.set(airport, [])
}

function addEdge(orgin, destination){
    adjacencyList.get(orgin).push(destination);
    adjacencyList.get(destination).push(orgin);
}

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)



// to find all the routes of given origin

function BFS(graph, start, target){

    let queue = [start];
    let visited = new Set();

    while(queue.length){
        let airport = queue.shift()
        let destinations = graph.get(airport)
        for(const distination of destinations){
            if(distination === target) {
                console.log(`found the distination -> ${distination}`)
            }
            if(!visited.has(distination)){
                visited.add(distination);
                queue.push(distination)
            }
        }
    }
}


// console.log(BFS(adjacencyList, 'PHX', 'BKK'));



// to find the shortest distance between origin and destination

function DFS(graph, start, target, visited = new Set()){
    visited.add(start);
    let destinations = graph.get(start);
    for(const destination of destinations){
        if(destination === target){
            console.log(`found ${destination}`)
            return;
        }
        if(!visited.has(destination)){
            DFS(graph, destination, target, visited)
        }
    }


}

DFS(adjacencyList, 'PHX', 'BKK');
