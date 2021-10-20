class Queue{
    constructor(){
        this.head
        this.traversNode
    }
    add(element){
        let n = {data: element}
        if(!this.traversNode){
            this.traversNode = n
            this.head = this.traversNode
        }else{
        this.traversNode.next = n
        this.traversNode = this.traversNode.next 
        }
    }

    remove() {
        let n = this.head.data
        this.head = this.head.next
        return n
    } 

    peek (){
        return this.head.data
    }

    isEmpty(){
        return this.head ? false : true
    }
    print(){
        console.log(this.head)
    }
}

let queue = new Queue()

queue.add(100)
queue.add(200)
queue.add(300)
queue.print()
queue.remove()

queue.print()