/**
 * write a function countConstruct(target, wordBank) that accepts target string and an array of strings
 * 
 * function should return number of ways that the target can be constructed by concatinating elements of wordBank array
 * 
 * you may reuse the elements of wordBank as many times as needed
 */

// time - o(n * m^2)  space - o(m^2)
// taget = m  wordbank = n

function countConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target]
    if(target === "") return 1;

    let totalCount = 0

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let numberOfWayss = countConstruct(target.slice(word.length), wordBank, memo)
            
            totalCount += numberOfWayss;
        }
    }
    memo[target] = totalCount
    return totalCount

}

// time - o(n^m * m)  space - o(m^2)
// taget = m  wordbank = n
function countConstructWithoutMemo(target, wordBank){
    if(target === "") return 1;

    let totalCount = 0

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let numberOfWayss = countConstruct(target.slice(word.length), wordBank)
            totalCount += numberOfWayss;
        }
    }

    return totalCount

}

console.log(countConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl   '])) // 2
console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0