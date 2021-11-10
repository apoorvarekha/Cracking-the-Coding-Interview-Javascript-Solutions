
// time = o(n*m) space -o(m^2)
function howSum(targetSum, numbers, memo= {}){
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    
     for(let num of numbers){
         let remaining = targetSum - num
         let remaningResult = howSum(remaining, numbers, memo)
         if(remaningResult != null){
            memo[targetSum] = [... remaningResult, num]
             return memo[targetSum]
         }
     }
     memo[targetSum] = null
     return null;
}

// time = o(n^m * m) space - o(m)
function howSum1(targetSum, numbers){
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    
     for(let num of numbers){
         let remaining = targetSum - num
         let remaningResult = howSum(remaining, numbers, memo)
         if(remaningResult != null){
             return [... remaningResult, num]
         }
     }
     return null;
}


console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null