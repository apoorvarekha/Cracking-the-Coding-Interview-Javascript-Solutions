class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data){
        let node = new Node(data)
        let current = null
        if(!this.head){
            this.head = node
        } else {
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++

    }

    insertAt(data, index){
        if(index > 0 && index > this.size){
            return
        }
        
        if(index ===0){
            this.head = new Node(data, this.head)
            return
        }
        let node = new Node(data)
        let current, previous;
        let count = 0 
        current = this.head
       
        while(count < index){
            previous = current
            count++
            current = current.next;
        }
        node.next = current
        previous.next = node
    }

    getDataAt(index){
        let count = 0
        let current = this.head;
        while(current){
            if(count === index) console.log(current.data)
            current = current.next
            count++
        }
        return null
    }

    removeDataAt(index){
        if(index > this.size) return this.data;

        let count = 0
        let previous, current
        current = this.head
        while(count < index){
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next
        this.size --; 
        return this.head
    }

    printListData(){
        let current = this.head

        while(current){
            current = current.next 
        }
    }
}
this.tail.next = new LinkedListNode(value);
this.tail = this.tail.next
let ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500, 2)
ll.printListData()
//ll.getDataAt(0)
console.log(JSON.stringify(ll.removeDataAt(4)))
// ll.printListData()

