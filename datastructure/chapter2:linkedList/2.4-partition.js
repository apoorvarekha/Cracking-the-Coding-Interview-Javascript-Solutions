function partition(head, i){
    let mainHeadNode, leftRecentNode, rightRecentNode

    while(head != null) {
        let val = head.data
        if(val <= i){
            if(leftRecentNode == null){
                leftRecentNode = {data: val, next: null}
                mainHeadNode = leftRecentNode
            } else {
                leftRecentNode.next = {data: val, next: null}
                leftRecentNode = leftRecentNode.next
            }
        } else {
            if(rightRecentNode == null) {
                rightRecentNode = {data: val, next: null}
            } else {
                rightRecentNode = {data: val, next: rightRecentNode}
            }
        }
        head = head.next
    }

    if(leftRecentNode != null){
        leftRecentNode.next = rightRecentNode
    } else {
        mainHeadNode = rightRecentNode
    }

    return mainHeadNode
}


// the first list data(10) will be kept as centerdata and then compare given i to next list data and place it left/right side of the centerdata
function partition1 (node, i){
    let head = node
    let tail = node
    while(node){
        let next = node.next
        if(node.data <= i){
            node.next = head
            head = node
           
        }else{
            tail.next = node
            tail = node
        }
        node= next
    }
    tail.next = null
    return head
}

let list = {
    data : 10,
    next: {
        data : 2,
        next: {
            data: 3,
            next: {
                data: 11,
                next: {
                    data: 7,
                    next: {
                        data: 5
                    }
                }
            }
        }
    }
}

// 5,3,2,10,11,7


console.log(JSON.stringify(partition1(list, 5)))