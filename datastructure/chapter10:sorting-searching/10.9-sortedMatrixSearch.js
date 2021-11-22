
function findElement(matrix, value){
    let row = 0;
    let column = matrix[0].length -1;

    while(row < matrix.length && column >= 0){
        if(value === matrix[row][column]) return true
        else if(value < matrix[row][column]){
            column-- ;
        }else{
            row++ ;
        }
    }
    return false
}

let matrix = [
    [15, 20, 40, 85], [20, 35, 80, 95], [30, 55, 95, 105], [40, 80, 100, 120]
]

console.log(findElement(matrix, 32))