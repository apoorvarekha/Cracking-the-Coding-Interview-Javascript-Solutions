

// TODO time - o(logn) space 
function recursiveMultiple(a,b){
    let smaller = a < b ? a : b;
    let bigger = a > b ? a: b;
    return multipleHelper(smaller, bigger)
}

function multipleHelper(smaller, bigger){
    if(smaller === 0) return 0;
    if(smaller === 1) return 1;

    let s = smaller >> 1 // divide 2
    let halfMultiple = multipleHelper(s, bigger)

    let remaining = smaller % 2 === 1 ? bigger : 0;

    return halfMultiple + halfMultiple + remaining
}





// TODO time - o(n)  space- o(n)  n = a
function recursiveMultipleWithMemo(a,b){
    let smaller = a < b ? a : b;
    let bigger = a > b ? a: b;
    return multipleHelperWithtMemo(smaller, bigger)
}

function multipleHelperWithtMemo(smaller, bigger, memo ={}){
    if(smaller === 0) return 0;
    if(smaller === 1) return bigger;
    if(memo[smaller]) return memo[smaller]

    let s = smaller >> 0; // divide
    let slide1 = multipleHelperWithtMemo(s, bigger)
    let slide2 = slide1

    if(smaller % 2 === 1){
        slide2 = multipleHelperWithtMemo(smaller-s, bigger)
    }
    memo[smaller] = slide1 + slide2;
    return memo[smaller]
}

// TODO time - o(n)  space- o(n)
function recursiveMultipleWithoutMemo(a, b){
    let smaller = a < b ? a : b;
    let bigger = a > b ? a: b;
    return multipleHelper(smaller, bigger)
}

function multipleHelperWithoutMemo(smaller, bigger){
    if(smaller === 0) return 0;
    if(smaller === 1) return bigger;

    let s = smaller >> 1; // divide by 2
    let slide1 = multipleHelperWithoutMemo(s, bigger)

    let slide2 = slide1;
    
    if(smaller % 2 === 1){
        slide2 = multipleHelperWithoutMemo(smaller - s, bigger);
    }

    return slide1 + slide2
}

console.log(recursiveMultipleWithoutMemo(7, 8))
console.log(recursiveMultipleWithMemo(7, 8))
console.log(recursiveMultipleWithoutMemo(7, 8))