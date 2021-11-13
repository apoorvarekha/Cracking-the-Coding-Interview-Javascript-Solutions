
/**
 * 
 * not efficient due to lot of time coming up with duplicate parens
 */
function parens(nums){
    let set = new Set();
    if(!nums) {
        set.add('')
    }else{
    let remainingParens = parens(nums -1)
    remainingParens.forEach(paren => {
        for(let i=0; i<= paren.length; i++){
            let withFirstNum = paren.slice(0, i) + '()' + paren.slice(i);
            set.add(withFirstNum) 
        }
    })
    }
    return [...set]
}

function parensCombos(openCount, closeCount = openCount, str = '', result = []) {
    if (!openCount && !closeCount) return result.push(str); // All openCounting and closing parens have been added
  
    if (openCount > closeCount) return; // Invalid: There would be more closing parens than open ones
  
    if (openCount > 0) parensCombos(openCount - 1, closeCount, str + '(', result);
    console.log(`${openCount} , ${closeCount} => ${str}`)
    if (closeCount > 0) parensCombos(openCount, closeCount - 1, str + ')', result);
    console.log(`${openCount} , ${closeCount} => ${str}`)
  
    return result;
  }

 console.log(parensCombos(2)) // [ '()()()', '(())()', '()(())', '(()())', '((()))' ]