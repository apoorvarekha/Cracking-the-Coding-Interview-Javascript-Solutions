// with temporary
// o(n)
function removeDups(list){
    if (!list || !list.next) return list;

    let currentList = list
    let set = new Set()
    set.add(currentList.data)
    while(currentList.next){
        if(set.has(currentList.next.data)){
            currentList.next = currentList.next.next
        } else {
            set.add(currentList.data)
            currentList = currentList.next
        }
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
        value : 200,
        next: {
            data: 100,
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

console.log(JSON.stringify(removeDups1(list)))

