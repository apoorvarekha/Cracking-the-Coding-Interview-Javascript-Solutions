/** time o(n^2)  space - o(1) */
function insertionSort(array){
    for(let i =1; i < array.length; i++){
        for(let j = i; j > 0; j--){
            if(array[j+1] < array[j]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            } else break;
        }
    }

    return array
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 42, 35])) // [ 1,  2,   4,   8, 35, 42, 123, 345]