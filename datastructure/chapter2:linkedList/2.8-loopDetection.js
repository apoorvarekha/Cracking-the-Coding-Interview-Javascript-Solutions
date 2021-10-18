
function loopDectection(list){
    let slow = list
    let fast = list
    // check if loop exist 
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next
        if(slow == fast) break;
    }
    console.log('--->1', slow)
    console.log('--->2', fast)
    // return if no collision
    if(fast ==  null || fast.next == null) return null;

    // find the starting point of the loop
    slow = list
    while(slow != fast){
        slow = slow.next;
        fast = fast.next
    }

    return fast;
        
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

five.next = three

console.log(loopDectection(one))