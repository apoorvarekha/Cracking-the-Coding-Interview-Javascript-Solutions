function validate_bst(tree, min = -Infinity, max = Infinity){
    if(!tree) return true
    if((tree.data <= min) || (tree.data  >= max)) return false 
    return validate_bst(tree.left, min, tree.data) && validate_bst(tree.right, tree.data, max)

}


let node15= {
   data: 15,
   left: null,
   right: null
}
let node5= {
   data: 5,
   left: null,
   right: null
}
let node30 = {
   data: 30,
   left: null,
   right: null
}
let node10= {
   data: 10,
   left: node5,
   right: node15
}

let node20= {
   data: 20,
   left: node10,
   right: node30
}


console.log(validate_bst(node20))