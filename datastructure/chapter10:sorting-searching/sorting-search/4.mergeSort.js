/** time- o(n logn)  space - o(n)*/
function mergeSort(array){
    if(array.length <= 1) return array;
    
    let midIndex = Math.floor(array.length/2);
    let leftArray = array.slice(0, midIndex);
    let rightArray = array.slice(midIndex)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right){
    let sortedArry = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArry.push(left.shift())
        }else{
            sortedArry.push(right.shift())
        }
    }
    return [...sortedArry, ...left.slice(), ...right.slice()]
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 42, 35]))
