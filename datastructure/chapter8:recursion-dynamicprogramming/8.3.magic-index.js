/**time: o(logn)  space: o(1) 
 * for distinct value
 * */ 
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


/**time: o(logn)  space: o(1) 
 * for non distinct value
 * */ 
function magicIndexBSForNonDistinct(arr){
    return magicFastNonDistinct(arr, 0, arr.length)
}

function magicFastNonDistinct(arr, start, end){
    if(end < start) return -1

    let midindex = Math.floor((start + end) / 2)
    let midValue = arr[midindex]

    if(midValue === midindex){
        return midindex
    }

    let leftIndex = Math.min(midindex -1, midValue)
    let left = magicFastNonDistinct(arr, start, leftIndex)
    if(left >= 0) return left

    let rightIndex = Math.max(midindex+1, midValue)
    let right = magicFastNonDistinct(arr, rightIndex, end)
    return right
}

/** time: o(n)  space: o(1)*/
function magicIndexbrutForce(arr){
    for(let i =0; i< arr.length; i++){
        if(arr[i] === i){
            return i
        } 
    }
}

// console.log(magicIndexbrutForce([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]))
// console.log(magicIndexBinarySearch([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]))
console.log(magicIndexBSForNonDistinct([-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13]))