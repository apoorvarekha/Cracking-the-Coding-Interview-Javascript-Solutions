// https://www.youtube.com/watch?v=VU2e_Vqgbi4 ("LEETCODE 285 (JAVASCRIPT) | INORDER SUCCESSOR IN BST") by Andy Gala


// time = o(n) space = 
function successor(tree, p){
    if(p.right){
        let prev = null
        let current = p.right
            while(current){
                prev = current;
                current = current.left;
            }
         return prev;   
    }

    let current = tree
    let prev = null
    while(current != p){
        if(current.val > p.val){
            prev = current
            current = current.left
        }else{
            current = current.right
        }
    }
    return prev
}


function predecessor(tree, p){
    if(p.left){
        let current = p.left;
        let prev = null
        while(current){
            prev = current;
            current = current.right
        }
        return prev
    }

    let current = tree;
    let prev = null
    while(p.val != current.val){
        if(p.val > current.val){
            prev = current
            current = current.right
        }else{
            current = current.left
        }
    }
    return prev
}

let node89 = { val: 89, left: null, right: null }
let node90 = { val: 90, left: node89, right: null }
let node68 = { val: 68, left: null, right: null }
let node57 = { val: 57, left: null, right: null }
let node65 = { val: 65, left: node57, right: node68 }
let node38 = { val: 38, left: null, right: null }
let node54 = { val: 54, left: node38, right: node65 }
let node72 = { val: 72, left: node54, right: node90 }
let node21 = { val: 21, left: null, right: null }
let node29 = { val: 29, left: null, right: null }
let node27 = { val: 27, left: node21, right: node29 }
let node5  = { val: 5, left: null, right: null }
let node20 = { val: 20, left: node5, right: node27 }
let node35 = { val: 35, left: node20, right: node72 }

console.log(successor(node35, node72)) // with right node
console.log(successor(node35, node29)) // with no right node
console.log(successor(node35, node90)) //  no successor

// console.log(predecessor(node35, node27))