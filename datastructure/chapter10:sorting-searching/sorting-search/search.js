function binarySearch(array, val){
    let lower = 0;
    let upper = array.length - 1;
    while(lower <= upper){
        let middle = lower + Math.floor((upper - lower)/2);
        if(val === array[middle]) return middle
        if(val < array[middle]){
            upper = middle - 1
        }else{
            lower = middle +1
        }
    }

    return -1;
}


function binarySearchRecursive(array, val){
    let lower = 0;
    let upper = array.length - 1;
    return search(array, val, lower, upper)
}

function search(array, val, lower, upper){
    if(lower > upper) return -1;

    let mid = lower + Math.floor((upper - lower)/2)

    if(val < array[mid]){
        return search(array, val, lower, mid -1)
    }else if(val > array[mid]){
        return search(array, val, mid+1, upper)
    }else{
        return mid
    }
}

console.log(binarySearchRecursive([0, 1 ,2, 3, 4, 5, 6, 7, 8, 9], 7))