
// time: o(n*m)    space:o(n+m)
function robotGrid(r, c, memo ={}){
    let key = r + ',' + c;
    if(memo[key]) return memo[key]
    if(r === 1 && c === 1) return 1;
    if(r === 0 || c === 0) return 0;

    memo[key] = robotGrid(r, c-1) + robotGrid(r-1, c);
    return memo[key]
}

// time o(2^n+m)  space - o(n+m)
function robotGrid(n, m){
    if(n === 1 && m === 1) return 1
    if(n === 0 || m === 0) return 0

    return robotGrid(n-1, m) + robotGrid(n, m-1)
}

console.log(robotGrid(3,2)) // 3
console.log(robotGrid(3,3)) // 6
console.log(robotGrid(3,4)) // 10