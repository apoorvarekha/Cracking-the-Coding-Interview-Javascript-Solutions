// STACK 
// it is like the book shelf where last book will be pick first. example is array => push, pop, peek, length

// how does array method works




// check if string is palindrome

    function isPalindrome(word){
        let rword = ''
        let letters =[]

        for(i =0; i< word.length; i++){
            letters.push(word[i])
        }

        for(i =0; i< word.length; i++){
            rword += letters.pop()
        }

        if(word === rword){
            console.log(word + " is palindrome")
        }else {
            console.log(word + " is not palindrome")
        }
    }

    isPalindrome('racecar')


    // using javascript method
    function isPalindromeJsMethod(word){
    let rword = word.split('').reverse().join('')
    if(word === rword){
        console.log(word + " is palindrome - using JS method")
        }else {
            console.log(word + " is not palindrome - using JS method")
        }
    }

    isPalindromeJsMethod('racecar')