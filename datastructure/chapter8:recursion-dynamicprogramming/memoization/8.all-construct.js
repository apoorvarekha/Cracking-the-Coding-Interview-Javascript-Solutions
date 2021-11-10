
// time - o(n^m)  space o(m)
// taget = m  wordbank = n
function allConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target]
    if(target === '') return [[]];

    let result = [];
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            let suffixWays = allConstruct(suffix, wordBank, memo)
            let targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }
    memo[target] = result
    return result
}

// time - o(n^m)  space o(m)
// taget = m  wordbank = n
function allConstruct1(target, wordBank){
    if(target === '') return [[]];

    let result = [];
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            let suffixWays = allConstruct(suffix, wordBank)
            let targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }

    return result
}


console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl   '])) // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // [ [ 'abc', 'def' ] ]
console.log(allConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // []

console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0