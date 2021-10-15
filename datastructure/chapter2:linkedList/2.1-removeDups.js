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
    return list1
}



let list = {
    data : 1,
    next: {
        value : 2,
        next: {
            data: 1,
            next: {
                data: 3,
                next: {
                    data: 4
                }
            }
        }
    }
}

console.log(JSON.stringify(removeDups1(list)))

