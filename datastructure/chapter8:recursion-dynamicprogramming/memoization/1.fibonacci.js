// write a function 'fib(n)' that takes in the number of argument, the function should return the nth number of Fibonacci sequence
// the 0th number of sequence is 0
// the 1st number of sequence is 1
// to generate the next number of the sequence, we sum the previous two   



// time - o(2^n)  space - o(n)
function fib(n){
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

// console.log(fib(7))
 // console.log(fib(50)) // stack call is 2^50 (1,125,899,906,842,624) 


// time o(n)  space o(n)
function fib1(n, memo= {}){
    if(n in memo) return memo[n]
    if(n <= 2) return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib1(50))