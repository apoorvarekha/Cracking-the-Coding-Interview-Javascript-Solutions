
// space o(nm)
// always row(n) length will be matrix length and column(m) will be lwngth of inner item of the matrix 
function zeroMatrix(matrix){
    let zeroArr = []

    const nullifyRowMatrix = (row, matrix) => {
        for(let j=0; j< matrix[0].length; j++){
            matrix[row][j] = 0
        }
    }
    
    const nullifyColumnMatrix = (column, matrix) => {
        for(let j=0; j< matrix.length; j++){
            matrix[j][column] = 0
        }
    }

    for(let i =0; i< matrix.length; i++){
        for(j= 0; j< matrix[0].length;j++){
            if(matrix[i][j] === 0){
                zeroArr.push({row : i, column : j})
            }
        }
    }
     
    if(zeroArr.length > 0){
        for(let i =0; i< zeroArr.length; i++){
            nullifyRowMatrix(zeroArr[i].row, matrix)
            nullifyColumnMatrix(zeroArr[i].column, matrix)
        }
    }

    return matrix

}




// ----------------

function zeroMatrix1(matrix){
    let rowHasZero = false;
    let colHasZero = false;

    for(let i= 0; i < matrix[0].length; i++){
        if(matrix[0][i] === 0) rowHasZero = true 
    }

    for(let i =0; i< matrix.length;i++){
        if(matrix[i][j] === 0) colHasZero = true
    }

    for(let i=1; i< matrix.length; i++){
        for(let j=1; j< matrix[0].length; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0
            }
        }
    }

    
}


// space o(1)





const matrix3X3 = [
    [1, 9, 3],
    [12, 0, 14],
    [11, 16, 5]
  ];
  
  const matrix4X4 = [
    [1, 2, 3],
    [12, 0, 14],
    [11, 16, 15],
    [3 , 5, 7]
    
  ];

  console.log(zeroMatrix(matrix4X4))