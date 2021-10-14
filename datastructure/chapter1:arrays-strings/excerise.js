function sort (arry){
    for (i=0; i< arry.length; i++){
        for(j=0; j < arry.length - i - 1; j++){
            if(arry[j] > arry[j+1]){
                [arry[j],arry[j+1]] = [arry[j+1], arry[j]]
            }
            console.log('-->' + i + " " + j + " " + arry)
        }
    }
    return arry
}
function bubbleSort(arr) {
    let noSwaps;
    for (let i = 0; i < arr.length; i++) {
        noSwaps = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // Swap
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                // Make 'noSwaps' false
                noSwaps = false;
            }
            console.log('-->' + i + " " + j + " " + arr)
        }
        // End the iterations if there were no swaps made in one full pass
        if (noSwaps) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([5,1,4,2,8]))