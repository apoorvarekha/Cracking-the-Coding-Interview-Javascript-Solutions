/** time o(nm)   space -o(n) 
 * n = cents   m = quarter
 * */ 
function coins(cents, quarters, memo={}){
    if(memo[cents]) return memo[cents]
    if(cents < 0) return -1;
    if(cents === 0) return 1;
    let totalNumOfWays = 0;
    for(let quarter of quarters){
        let remaining = cents - quarter;
         let numOfWays = coins(remaining, quarters)
         if(numOfWays > 0){
            totalNumOfWays += numOfWays
         }
    }
    memo[cents] = totalNumOfWays
    return totalNumOfWays
}

console.log(coins(25, [5, 10, 25]))

// TO DO 

// 8.8, 8.12 to 8.14