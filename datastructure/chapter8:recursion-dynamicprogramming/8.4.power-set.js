
/** time o(2^n)  space: o(n^2)
 * space - n stach calls and n 'rest' space
 */
function powerSet(arr){
    if(arr.length === 0) return [[]]

    let first = arr[0]
    let rest = arr.slice(1);
    let withoutFirst = powerSet(rest);
    let withFirst = []

    withoutFirst.forEach(comb => {
        withFirst.push([...comb, first])
    })

    return [...withoutFirst, ... withFirst]
}

console.log(powerSet(['a', 'b', 'c']))

function combination(nums){
    let combinations = [];

    
        for(let i = 0; i < nums.length; i++) {
            let count = 0;
            let limit = combinations.length
            while(count < limit) {
                let tempList = combinations[count]
                count++
                combinations.push([...tempList, nums[i]]);
            }
            let indivList = []
            indivList.push(nums[i]);
            combinations.push(indivList);
        }
        combinations.push([]);
        
     return combinations;
}

console.log(combination(['a', 'b', 'c']))