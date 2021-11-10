/**
    write a function howSum(targetSum, numbers) that takes targetSum and array of number as angrument.

    the function should return an array containing any combination of element that adds up to exactly the targetSum.

    if there is no combination that adds up to targetSum return null

    if there is multiple combination possible, you may return any single one.
 
*/

/** time - o(m^2n)  space - o(m^2)
*   m = targetSum
*   n = numbers
* */ 
function howSum(targetSum, numbers) {
    let table = Array(targetSum +1).fill(null);
    table[0] = [];

    for(let i=0; i<= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                table[i+num] = [...table[i], num]
            }
        }
    }
    return table[targetSum]
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null