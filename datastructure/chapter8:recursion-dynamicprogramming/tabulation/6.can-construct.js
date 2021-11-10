/**
 * write a function canConstruct(target, wordBank) that accepts target string and an array of strings
 * 
 * function should return a boolean indicating whether or not the target can be constructed by concatinating elements of wordBank array
 * 
 * you may reuse the elements of wordBank as many times as needed
 */

/**
 * time - o(m^2n) space - o(m)
 * target - m
 * wordBank - n
 * 
 */
 function canConstruct(target, wordBank){
    let table = Array(target.length + 1).fill(false);
    table[0] = true

    for(let i = 0; i <= target.length; i++){
        if(table[i] === true){
            for(let word of wordBank){
                if(target.slice(i, i+word.length) === word){
                    table[i+ word.length] = true;
                }
            }
        }
    }

    return table[target.length]
 }


 console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
 console.log(canConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) //false
 console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) //true
 console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false