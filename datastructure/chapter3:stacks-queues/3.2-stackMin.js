function last(stack){
    return stack[stack.length - 1]
}
class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }
push(x){
        if(this.minStack.length === 0 || x <= last(this.minStack)){
            this.minStack.push(x)
        }
        this.stack.push(x)
    }
    
    pop(){
        if(last(this.minStack) === last(this.stack)){
            this.minStack.pop()
        }
        return this.stack.pop()
    }
    
    top(){
        return last(this.stack)
    }
    
    min(){
        return last(this.minStack)
    }
}

let stack = new MinStack()

stack.push(5);
stack.push(6);
stack.push(3);
stack.push(7);
stack.pop()
console.log(stack.min())
stack.pop()
console.log(stack.min())
