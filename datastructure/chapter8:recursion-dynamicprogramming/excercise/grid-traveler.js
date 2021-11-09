
// time - o(n*m) space  - o(n + m)
function gridTraveler(n, m, memo ={}){
    let key = m + ',' + n
    if(key in memo) return memo[key]
    if(n === 1 && m === 1) return 1
    if(n === 0 || m === 0) return 0

    memo[key] = gridTraveler(n-1, m, memo) + gridTraveler(n, m-1, memo)
    return memo[key]
}


// time o(2^n+m)  time(n+m)
function gridTraveler1(n, m){
    if(n === 1 && m === 1) return 1
    if(n === 0 || m === 0) return 0

    return gridTraveler(n-1, m) + gridTraveler(n, m-1)
}

console.log(gridTraveler(3, 2))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))
