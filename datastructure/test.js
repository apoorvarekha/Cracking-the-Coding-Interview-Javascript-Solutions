
function sumUp(arr){
    let result = 0;
    for(let i=0; i< arr.length; i++){
        result += arr[i]
    }
    return result;
}

console.log('o(n)', sumUp([1,3,10]))