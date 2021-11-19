/**
 * time o(log n) space o(1)
 * 
 */
function serach(list, value){
    let index = 1;
    while(list.elementAt(index) != -1 && list.elementAt(index) < value){
        index *= 2;
    }
    return binarySearch(list, value, index/2, index)
}

function binarySearch(list, value, low, high){
    while(low < high){
        let mid = Math.floor((low + high)/2)
        if(value < list.elementAt(mid)){
            high = mid - 1;
        }else if(value > list.elementAt(mid)){
            low = mid + 1
        }else{
            return mid
        }
    }
    return -1;
}