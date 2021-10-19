// real life example, browser history / stack of books => 


// using linkedList
class Stack {
    constructor(){
        this.head = {}
    }

    push(element){
        let item = {data: element}
        item.next = this.head;
        this.head = item
    }

    pop(){
        let item = this.head.data
        this.head = this.head.next
        return item
    }

    peek(){
        return this.head.data
    }

    print(){
        console.log(this.head)
    }

    isEmpty(){
        return this.head ? true: false
    }

}


class Stack1 {
    constructor(){
        this.item = {};
        this.count = 0
    }

    push(element){
        this.item[this.count] = element
        this.count ++
    }

    pop(element){
        let deletedItem = this.item[this.count-1] 
        delete this.item[this.count-1] 
        this.count --
        return deletedItem
    }

    peek(){
        return this.item[this.count-1]
    }

    isEmpty(){
        return this.count === 0 ? true: false
    }


    size(){
        return this.count;
    }

    print(){
       console.log( this.item)
    }

    clear(){
        this.item = [];
        this.count = 0
    }
}

const stack = new Stack()

stack.push(100)

// stack.push(200)
// stack.push(300)
stack.print()

// stack.push(400)

console.log(stack.pop())

console.log(stack.peek())
stack.print()
console.log(stack.isEmpty())
// console.log(stack.size())


