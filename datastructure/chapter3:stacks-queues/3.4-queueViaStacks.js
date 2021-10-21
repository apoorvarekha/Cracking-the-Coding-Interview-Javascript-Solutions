class QueueViaStacks{
    constructor(){
        this.newStack = [];
        this.oldStack = [];
    }

    push(element){
        this.newStack.push(element)
    }

    pop(){
        this.shiftStacks()
        return this.oldStack.pop()
    }

    shiftStacks(){
        if(!this.newStack && !this.oldStack) throw Error('stack is empty')

        if(!this.oldStack.length){
            while(this.newStack.length){
                this.oldStack.push(this.newStack.pop())
            }
        }
    }

    peek(){
        this.shiftStacks()
        return this.oldStack[this.oldStack.length-1]
    }
}

let queue = new QueueViaStacks()

queue.push(1);
queue.push(2);
console.log(queue.pop())
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue.pop())
console.log(queue.peek())
console.log(queue.pop())

