/** time o(n^2)  space - o(1) */
function selectionSort(array){
    for(let i=0; i < array.length - 1; i++){
        let minIndex = i
        for(j = i + 1; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }

    return array
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 42, 35])) // [ 1,  2,   4,   8, 35, 42, 123, 345]