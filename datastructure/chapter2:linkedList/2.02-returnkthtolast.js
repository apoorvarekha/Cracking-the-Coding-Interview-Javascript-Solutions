function kthElement(head, k){
    let count = 1;
    while(head.next){
        if(count === k) {
            return head
        } else {
            count++
            head = head.next
        }   
    }
    return ;
}



let list = {
    data : 1,
    next: {
        value : 2,
        next: {
            data: 5,
            next: {
                data: 3,
                next: {
                    data: 4
                }
            }
        }
    }
}

console.log(kthElement(list, 3))