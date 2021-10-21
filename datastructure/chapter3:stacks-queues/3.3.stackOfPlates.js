class SetOfStacks{
    constructor(capacity){
        if(!capacity) throw Error('capacity is required')
        this.stacks = [[]];
        this.capacity = capacity
    }

    push(element){
        let lastStack = getLastStack(this.stacks)
        if(lastStack.length === this.capacity){
            this.stacks.push([])
            lastStack = getLastStack(this.stacks)
        }
        lastStack.push(element)
    }

    pop(){
        let lastStack = getLastStack(this.stacks)
        lastStack.pop()
        if(lastStack.length === 0){
            this.stacks.pop()
        }
    }

    popAt(stackNumber){
        if(stackNumber > this.stacks.length -1) throw Error('Invalid Stack number')
        if(stackNumber === this.stacks.length -1) return this.stacks[stackNumber].pop()
        let popedElement;
        if(stackNumber < this.stacks.length -1){
            popedElement = this.stacks[stackNumber].pop()
            for(let i = stackNumber ; i < this.stacks.length - 1; i++){
                this.stacks[i].push(this.stacks[i+1].shift())
            }
        }

        if(this.stacks.length > 1 && !this.stacks[this.stacks.length -1]){
            this.stacks.pop()
        }

        return popedElement
    }

    peek(){
        let lastStack = getLastStack(this.stacks)
        return lastStack[lastStack.length -1]
    }

    print(){
        console.log(this.stacks)
    }
}

const getLastStack = (stacks) => {return  stacks[stacks.length -1]}


let stacks = new SetOfStacks(5)
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
stacks.push(6);
stacks.push(7);
// stacks.pop();
// stacks.pop();
// console.log(stacks.peek())
stacks.popAt(0)
stacks.print()