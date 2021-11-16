

function merge(a, b){

    while(a.length && b.length){
        if(left[0] < right[0]){
            sortedArry.push(left.shift())
        }else{
            sortedArry.push(right.shift())
        }
    }
    return [...sortedArry, ...left.slice(), ...right.slice()]
}


let a = [6, 4]
let b = [5, 7]
console.log(mergeSort([1, 4, 2, 8, 345, 123, 42, 35]))