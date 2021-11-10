/**
    write a function canSum(targetSum, numbers) that takes targetSum and array of number as angrument.

    the function should return an boolean indicating whether or not it is possible to generate the targetSum using the numbers from the array.

    you may use the elements in the array as many times as needed

    you may assume that all the numbers in the array are nonnegative.
 
 */

/** time - o(mn)  space - o(m)
*   m = targetSum
*   n = numbers
* */ 
function canSum(targetSum, numbers){
    let table = Array(targetSum+1).fill(false);
    table[0] = true

    for(let i =0; i<= targetSum; i++){
        if(table[i] === true){
           for(let num of numbers){
               table[i+ num] = true
           }
        }
    }
    return table[targetSum]
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
