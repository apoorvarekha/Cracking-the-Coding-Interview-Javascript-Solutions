

// Given a string, write a function to check if it is a permutation of a palindrome.
//o(n)
function palindromePermutation(str){
     let letters = new Set()
     for(const char of str){
         if(letters.has(char)){
            letters.delete(char)
         }else{
            letters.add(char)
         }
     }
     console.log(letters.size)
     if(letters.size <= 1) return true
     else return false
}


function testPalindromePermutation(){
    let str = 'tactcoa'
    console.log(palindromePermutation(str))
}

testPalindromePermutation()









function permutation(str, result) {
    if(str.length == 0){
       console.log(result)
    }
    for(let i=0; i< str.length; i++) {
        let rest = str.substring(0,i) + str.substring(i+1)
        permutation(rest, result+ str[i])
    }
  }


  // permutation('let', '')