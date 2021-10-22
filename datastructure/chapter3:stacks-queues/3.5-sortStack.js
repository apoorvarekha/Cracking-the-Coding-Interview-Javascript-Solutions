
function sortStack(stack){
    let temp = []
    while(stack.length){
        let popped = stack.pop()
        while(temp.length && temp[temp.length -1] > popped){
            stack.push(temp.pop())
        }
        temp.push(popped)
    }
    while(temp.length){
        stack.push(temp.pop())
    }
    return stack
}

let stack = [12, 3, 8, 5, 1, 10, 7]

console.log(sortStack2(stack))