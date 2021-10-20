class MultiStack{
    constructor(stackSize){
        this.numberOfStacks = 3;
        this.stackCapacity = stackSize;
        this.values = [];
        this.sizes = [0,0,0]
    }
    
    push(stackNumber, value){
        if(stackNumber > this.numberOfStacks - 1) return console.log(`Stack number ${stackNumber} is greater`)
        if(this.isFull(stackNumber)) return console.log(`Stack number ${stackNumber} is full`)
        this.sizes[stackNumber] ++
        let topIndex = this.indexOfTop(stackNumber)
        this.values[topIndex] = value
        console.log(`${value} is push is stack ${stackNumber}`)
    }

    pop(stackNumber){
        if(stackNumber > this.numberOfStacks - 1) return console.log(`Stack number ${stackNumber} is greater`)
        if(this.isEmpty(stackNumber)) return console.log(`Stack number ${stackNumber} is empty`)
        let data =  this.values[this.indexOfTop(stackNumber)]
        this.values[this.indexOfTop(stackNumber)] = 0
        this.sizes[stackNumber] --
        return data
    }

    peek(stackNumber){
        if(stackNumber > this.numberOfStacks - 1) return console.log(`Stack number ${stackNumber} is greater`)
        if(this.isEmpty(stackNumber)) return console.log(`Stack number ${stackNumber} is empty`)
       return this.values[this.indexOfTop(stackNumber)]
    }

    isFull(stackNumber){
        return this.sizes[stackNumber] === this.stackCapacity
    }

    indexOfTop(stackNumber){
        const offset = this.stackCapacity * stackNumber
        const size = this.sizes[stackNumber]
        return offset + size - 1
    }

    isEmpty(stackNumber){
        return this.sizes[stackNumber] === 0
    }
}


let multiStack = new MultiStack(5)
multiStack.stackCapacity
multiStack.pop(3, 6)
// multiStack.push(2, 4)
// multiStack.push(2, 3)
// multiStack.push(2, 1)
// multiStack.pop(1)

