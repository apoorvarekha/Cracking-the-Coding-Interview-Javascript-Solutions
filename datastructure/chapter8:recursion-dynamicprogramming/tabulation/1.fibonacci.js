// write a function 'fib(n)' that takes in the number of argument, the function should return the nth number of Fibonacci sequence
// the 0th number of sequence is 0
// the 1st number of sequence is 1
// to generate the next number of the sequence, we sum the previous two

/*-- time 0(n) space - o(n) */
function fib(n){
    // array n+ 1 bcz we need max index of array same as n
    let table = Array(n+1).fill(0);
    table[1] = 1

    for(let i=0; i< n; i++){
        table[i+1] += table[i]
        table[i+2] += table[i]
    }

    return table[n]
}

console.log(fib(7)) // 13
console.log(fib(50)) // 12586269025
