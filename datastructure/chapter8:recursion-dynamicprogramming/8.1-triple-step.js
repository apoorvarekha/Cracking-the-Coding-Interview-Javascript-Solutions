// O(N) TIME --- O(N) SPACE
function tripleStep1(n, memo ={}){
    if(memo[n]) return memo[n]
    if(n === 0) return 1;
    if(n < 0) return 0
    memo[n] = tripleStep1(n -1) + tripleStep1(n - 2) + tripleStep1(n - 3)
    return memo[n]
     
}

// O(N) TIME --- O(N) SPACE
function tripleStep(n, steps, memo ={}){
    if(n === 0) return 1;
    if(n < 0) return 0
    let result = 0;
    for(let step of steps){
        let res = tripleStep((n-step), steps, memo)
        if(res != 0) result += res;
    }
    memo[n] = result
    return result
}

console.log(tripleStep1(25,  [1, 2, 3])) // 2555757
console.log(tripleStep1(15,  [1, 2, 3])) // 5768