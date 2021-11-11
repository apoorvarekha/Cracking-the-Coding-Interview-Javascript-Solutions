
/** time: o(n)  space: o(1)*/
function magicIndexbrutForce(arr){
    for(let i =0; i< arr.length; i++){
        if(arr[i] === i){
            return i
        } 
    }
}

/**time: o(logn)  space: o(1) */
function magicIndexBinarySearch(arr){
    return magicFast(arr, 0, arr.length-1)
}

function magicFast(arr, start, end){
    if(start > end) return -1

    let mid = Math.ceil((start+end)/2) ;
    if(arr[mid] === mid){
        return mid
    }else if(arr[mid] > mid){
        return magicFast(arr, start, mid - 1)
    }else if(arr[mid] < mid){
        return magicFast(arr, mid + 1, end)
    }
}




console.log(magicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]))