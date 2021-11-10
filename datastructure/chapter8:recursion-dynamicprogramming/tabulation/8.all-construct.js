/**
 * write a function allConstruct(target, wordBank) that accepts target string and an array of strings
 * 
 * function should return 2D array containing all possible ways that the target can be constructed by concatinating elements of wordBank array.
 * each element of the 2D array should represent one combination that construct the target
 * 
 * you may reuse the elements of wordBank as many times as needed
 */


// time - o(n^m)  space o(n^m)
// taget = m  wordbank = n
function allConstruct(target, wordBank){
    let table = Array(target.length +1).fill().map(() => [])
    table[0] = [[]]

    for(let i =0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i+word.length) === word){
                let combination = table[i].map(subArray=> [...subArray, word])
                table[i + word.length].push(...combination)
            }
        }
    }

    return table[target.length]
}

console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl   '])) // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // [ [ 'abc', 'def' ] ]
console.log(allConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // []
console.log(allConstruct("eeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0