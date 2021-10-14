// Question Given two strings, write a method to decide if one is a permutation of the other.


// o(nlogn)
const sort = (str) => [...str].sort().join()
function checkPermutation(str1, str2){
    if(str1.length !== str2.length) return false
    return (sort(str1) === sort(str2))
}

// o(n)
function checkPermutation1(str_a, str_b){
    let letters = {}
    for(let i=0; i < str_a.length; i++){
        let letter = str_a.charAt(i)
        letters[letter] = isNaN(letters[letter]) ? 1: letters[letter]+1;
    }

    for(let i= 0; i< str_b.length; i++){
        let letter = str_b.charAt(i)
        letters[letter] -= 1
    }

    for(const i in letters){
        if(letters[i]  !== 0) return false;
    }
    return true
}

// TODO using map

function testCheckPermutation(){
    let str1 = 'abc'
    let str2 = 'baa'
    let result = checkPermutation(str1, str2)
    console.log(result)
}
testCheckPermutation()