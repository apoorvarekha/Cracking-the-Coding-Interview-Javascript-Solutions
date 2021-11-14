/** time o(n^2)  space - o(1) */
function bubbleSort(arr){
    for(let i=0; i< arr.length-1; i++){
        for(let j =0; j< arr.length - 1 -i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 42, 35])) // [ 1,  2,   4,   8, 35, 42, 123, 345]s