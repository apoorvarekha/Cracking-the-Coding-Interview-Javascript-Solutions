/**
 * write a function countConstruct(target, wordBank) that accepts target string and an array of strings
 * 
 * function should return number of ways that the target can be constructed by concatinating elements of wordBank array
 * 
 * you may reuse the elements of wordBank as many times as needed
 */

/**
 * time - o(m^2n) space - o(m)
 * target - m
 * wordBank - n
 */
function countConstruct(target, wordBank){
    let table = Array(target.length+1).fill(0);
    table[0] = 1;

    for(let i =0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i+ word.length) === word){
                table[i + word.length] += table[i]
            }
        }
    }
    return table[target.length]
}


console.log(countConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl   '])) // 2
console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0