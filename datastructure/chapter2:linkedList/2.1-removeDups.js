// with temporary
// o(n)
function removeDups(list){
    let n = list
    let set = new Set();
    let previous = null;

    while(n!= null){
        if(set.has(n.data)){
            previous.next = n.next
        }else{
            set.add(n.data);
            previous = n;
        }
        n = n.next
    }

    return list
}


// without temporary  o(n2)
function removeDups1(head){
    let list = head
    while(list.next){
        let currentList = list
        while(currentList.next){
            if(currentList.next.data === list.data){
                currentList.next = currentList.next.next
            }else{
                currentList = currentList.next
            }
        }
        list = list.next
    }
    return head
}

let list = {
    data : 100,
    next: {
        data : 200,
        next: {
            data: 300,
            next: {
                data: 300,
                next: {
                    data: 300,
                    next: {
                        data: 400,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(JSON.stringify(removeDups(list)))

