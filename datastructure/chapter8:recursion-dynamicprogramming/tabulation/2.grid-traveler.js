/* 
say that you are a traveler on 2D grid. you begin in top left corner 
and your goal is to travel to the bottom right corner.
you may move only down or right

write a function `gridTraveler(m, n)` that calculate this
*/


/*-- time 0(mn) space - o(mn) */
function gridTraveler(m, n){
    let table = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    table[1][1] = 1

    for(let i=0; i<= m; i++){
        for(let j=0; j<= n; j++){
            let current = table[i][j]
            if(j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }

    return table[m][n]
}

console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220