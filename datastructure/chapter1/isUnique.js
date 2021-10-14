
// Question Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// (o)n
// 1.
function unique(word){
    let collection = {}
    if(!word) return false
    for(let i =0; i < word.length; i++){
        if(collection[word[i]]){
           return false
        } else {
            collection[word[i]] = true; 
        }
    }
    return true
}

// (o)n2
function uniqueN2(word){
    if(!word) return false
    for(let i =0; i < word.length; i++){
        for(let j = i+1; j < word.length; j++){
            if(word[i] === word[j]){
                return false
            }
        }
    }
    return true
}

function isUnique(str) {
    return new Set(str).size == str.length;
  }


function testUnique() {
let str = 'appu'
console.log(str + ' is ', isUnique(str))

}

testUnique()
