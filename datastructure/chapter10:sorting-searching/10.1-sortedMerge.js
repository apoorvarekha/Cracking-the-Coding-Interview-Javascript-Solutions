

function merge(a, b, countA, countB){
    let indexA = countA - 1;
    let indexB = countB - 1;
    let indexMerge = countA + countB - 1

    while(indexB >= 0){
       if(indexA >= 0 && a[indexA] > b[indexB]){
           a[indexMerge] = a[indexA];
           indexA--;
       }else{
           a[indexMerge] = b[indexB];
           indexB --
       }
       indexMerge --
    }

    return a
}


let a = [4, 6]
let b = [5, 7, 10]
console.log(merge(a, b, 2, 3))