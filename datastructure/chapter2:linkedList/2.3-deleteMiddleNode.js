
// replace c with d 

function deleteMiddleNode(head){
    let next = head.next
    head.data = next.data
    head.next = next.next
    return true
}

let five = {
    data : 'e',
    next : null 
}

let four = {
    data : 'd',
    next : five
}

let three = {
    data : 'c',
    next : four
} 

let two = {
    data : 'b',
    next : three
}

let one = {
    data : 'a',
    next : two
}


console.log(deleteMiddleNode(three, one))