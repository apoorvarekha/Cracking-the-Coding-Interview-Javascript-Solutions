/**
    write a function bestSum(targetSum, numbers) that takes targetSum and array of number as angrument.

    the function should return an array containing shortest combination of numbers that adds up to exactly the targetSum.

    if there is no combination that adds up to targetSum return null

    if there is tie for the shortest combination, you may return any of the shortest.
 
*/

/** time - o(m^2n)  space - o(m^2)
*   m = targetSum
*   n = numbers
* */ 
function bestSum(targerSum, numbers){
    let table = Array(targerSum +1).fill(null)
    table[0] = []

    for(let i=0; i <=targerSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                let combination = [...table[i], num]
                if(!table[i +num] || combination.length < table[i +num].length ){
                    table[i+num] = combination
                }
            }
        }
    }
    return table[targerSum]
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) //[3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
console.log(bestSum(100, [25, 2, 5, 1])) // [25, 25, 25, 25]