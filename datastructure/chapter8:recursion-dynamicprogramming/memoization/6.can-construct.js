/**
 * write a function canConstruct(target, wordBank) that accepts target string and an array of strings
 * 
 * function should return a boolean indicating whether or not the target can be constructed by concatinating elements of wordBank array
 * 
 * you may reuse the elements of wordBank as many times as needed
 */

// time - o(n * m^2)  space - o(m^2)
// taget = m  wordbank = n
function canConstruct(target, wordBank, memo= {}){
    if(target in memo) return memo[target]
    if(target === "") return true

    for(let word of wordBank){
        if(target.indexOf(word) === 0){ // if u find that word in starting 
            let suffix = target.slice(word.length)
            if(canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true
                return true
            }
        } 
    }
    memo[target] = false
    return false
}


// time - o(n^m * m)  space - o(m^2)
// taget = m  wordbank = n
function canConstructWithoutMemo(target, wordBank){
    if(target === "") return true

    for(let word of wordBank){
        if(target.indexOf(word) === 0){ // if u find that word in starting 
            let suffix = target.slice(word.length)
            if(canConstruct(suffix, wordBank) === true) {
                return true
            }
        } 
    }

    return false
}


console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) //false
console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false