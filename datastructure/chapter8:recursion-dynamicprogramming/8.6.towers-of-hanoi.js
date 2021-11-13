
/** time -o(2^n)  space - o(n) 
 * n = num of disks
*/
function printTowerOfHanoi(n, origin , buffer, distination){
    if(n <= 0) return;
    printTowerOfHanoi(n-1, origin, distination, buffer);
    console.log(`${origin} - ${distination}`)
    printTowerOfHanoi(n-1, buffer, origin, distination)
}

console.log(printTowerOfHanoi(3, 1, 2, 3))



/** time -o(2^n)  space - o(n) 
 * n = num of disks
*/
function towersOfHanoi(numOfDisk){
    let stacks = [[],[],[]]
    for(let i = numOfDisk; i>= 1; i--){
        stacks[0].push(i)
    }
    solveHanoi(numOfDisk, ...stacks)
    return stacks
}

function solveHanoi(numOfDisk, startStack, bufferStack, endStack){
    if (numOfDisk <= 0) return;
     // Move top n-1 disks from 'start' to 'buffer' by using 'end' as the buffer.
    solveHanoi(numOfDisk -1, startStack, endStack, bufferStack)
    // Move top from 'start' to 'end'.
    endStack.push(startStack.pop())
    // Move top n-1 disks from 'buffer' to 'end' by using 'start' as the buffer.
    solveHanoi(numOfDisk -1, bufferStack, startStack, endStack)
}


  
 
  

console.log(towersOfHanoi(5))