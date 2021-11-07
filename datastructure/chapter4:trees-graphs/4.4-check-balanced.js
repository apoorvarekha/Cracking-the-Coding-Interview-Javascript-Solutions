function isBTBalanced(tree){
    if(!tree) return true
    return checkHeight(tree) != Number.MIN_SAFE_INTEGER
}


function checkHeight(tree){
    if(!tree) return -1

    let leftHeight = checkHeight(tree.left)
    let rightHeight = checkHeight(tree.right)

    let heightDiff = Math.abs(leftHeight - heightDiff)

    if(heightDiff > 1) return false
    return Math.max(leftHeight , rightHeight) + 1
}

let node3= {
    data: 3,
    left: null,
    right: null
}
let node1= {
   data: 1,
   left: null,
   right: null
}
let node8= {
   data: 8,
   left: node3,
   right: node1
}
let node7 = {
   data: 7,
   left: null,
   right: null
}
let node2= {
   data: 2,
   left: node7,
   right: null
}

let node6= {
   data: 6,
   left: node8,
   right: node2
}