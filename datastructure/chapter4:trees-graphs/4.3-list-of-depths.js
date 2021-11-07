// TIME - O(N) AND SPACE - O(N)
function DFS_createListOfBTDepth(tree, lists = {}, depthLevel = 0) {
    if (tree) {
        if (!lists[depthLevel]) lists[depthLevel] = new LinkedList();

        lists[depthLevel].append(tree.data);

        DFS_createListOfBTDepth(tree.left, lists, depthLevel + 1);
        DFS_createListOfBTDepth(tree.right, lists, depthLevel + 1);
    }

return lists;
}

// TIME - O(N) AND SPACE - O(N)
function BFS_createListOfBTDepths(tree){
    let queue = [tree]
    let list = {};
    tree.level = 0;

    while(queue.length){
        let parent = queue.shift()
        if(!list[parent.level]){
            list[parent.level] = new LinkedList()
        }
        list[parent.level].append(parent.data)

        if(parent.left){
            parent.left.level = parent.level + 1
            queue.push(parent.left)
        }
        if(parent.right){
            parent.right.level = parent.level + 1
            queue.push(parent.right)
        }
    }
    return list
}

  class Node{
    constructor(data){
        this.data = data;
       this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = this.tail = null
    }

    prepand(data){
        if(!this.head){
            this.head = this.tail = new Node(data)
        }else{
            this.head = new Node(data, this.head)
        }
    }


    append(data){
        if(!this.head){
            this.head = this.tail = new Node(data);
        }else{
            this.tail = this.tail.next = new Node(data)
        }
    }
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


 console.log(JSON.stringify(BFS_createListOfBTDepths(node6)))
 