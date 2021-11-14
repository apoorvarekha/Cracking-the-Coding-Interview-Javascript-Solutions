/** time- o(n logn) space - o(log n)
 * time - worst case o(n^2) ex: if sorted array is given
*/
function quickSort(array){
    if(array.length <= 1) return array
    // we are taking last element in array(we can also take 1st element)
    let middle = array[array.length -1];  
    let leftArray = []
    let rightArray = []
    // we dont need to consider the middle element
    for(let element of array.slice(0, array.length - 1)){
        element < middle ? leftArray.push(element) : rightArray.push(element)
    };
    
    return [...quickSort(leftArray), middle, ...quickSort(rightArray)]
}

console.log(quickSort([5, 9,4,6,2,10,11, 1, 3]))