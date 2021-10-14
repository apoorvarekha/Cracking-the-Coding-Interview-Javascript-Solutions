
// consider 3*3 matrix, above the below the diangle line we get the 3 items above and below( |_ ) . swap the above the below element
function rotateMatrix(matrix) {
    console.log(matrix)
    let N = matrix.length 
   for(i =0; i< N; i++){
       for(j=i; j< N; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
            
       }
   }

   for(i =0; i< N; i++){
       for(j=0; j<N/2; j++){
           let temp = matrix[i][j]
           matrix[i][j] = matrix[i][N-1-j]
           matrix[i][N-1-j] = temp
       }
   }
   return matrix
  }

  
  // consider the matrix as box inside the box. so for 4*4 there will be 2 box(layers), for 5*5 2 box and center value will not change. 
  // now move the outer box bottom left item to top left , bottom right item to bottom left , similarly complete the box rotation and go to next layer
  function rotateMatrix1(matrix) {
    console.log(matrix)
    if (!matrix || !matrix.length) throw Error('invalid matrix');
  
    const len = matrix.length;
    for (let layer = 0; layer < len / 2; layer++) {
      const firstLayer = layer,
            lastLayer = len - 1 - layer;
  
      for (let i = layer; i < lastLayer; i++) {
        const offset = i - layer,
              top = matrix[firstLayer][i];
  
        // left -> top
        matrix[firstLayer][i] = matrix[lastLayer - offset][firstLayer];
        // bottom -> left
        matrix[lastLayer - offset][firstLayer] = matrix[lastLayer][lastLayer - offset];
        // right -> bottom
        matrix[lastLayer][lastLayer - offset] = matrix[i][lastLayer];
        // top -> right
        matrix[i][lastLayer] = top;
      }
    }
    return matrix;
  }



  
  const matrix3X3 = [
    [1, 2, 3],
    [12, 13, 14],
    [11, 16, 15]
  ];
  
  const matrix4X4 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6]
  ];
  
  const matrix5X5 = [
    [1, 2, 3, 4, 5],
    [15, 25, 26, 19, 6],
    [15, 24, 27, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
  ];
  
  console.log(rotateMatrix2(matrix3X3));