
/**
    write a function canSum(targetSum, numbers) that takes targetSum and array of number as angrument.

    the function should return an boolean indicating whether or not it is possible to generate the targetSum using the numbers from the array.

    you may use the elements in the array as many times as needed

    you may assume that all the numbers in the array are nonnegative.
 
 */


/** time - o(mn)  space - o(m)
*  m = targetSum
*  n = numbers
* */ 
function canSum(targetSum, numbers, memo ={}){
    if(targetSum in memo) return memo[targetSum]
    if(targetSum < 0) return false;
    if(targetSum === 0) return true;

    for(let num of numbers){
        const remaining = targetSum - num
        if(canSum(remaining, numbers, memo) === true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}

// time o(n * m) space o(m)
function canSum1(targetSum, numbers){
    if(targetSum < 0) return false;
    if(targetSum === 0) return true;

    for(let num of numbers){
        const remaining = targetSum - num
        if(canSum(remaining, numbers) === true) {
            return true
        }
    }
    return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false