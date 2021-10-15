function sumList(list1, list2){
    let finalList,carry = 0;

    while(list1 || list2){
        let sum = addData(list1.data, list2.data, carry)
        carry = sum.carry
        if(!finalList){
            finalList = {data: sum.data, next:{}}
        }else{
            finalList = { data: sum.data, next: finalList}
        }
        list1 = list1.next
        list2 = list2.next
    }

    if(carry) finalList = { data: carry, next: finalList}
    return finalList
}

const addData = (l1, l2, carry) => {
    let result = l1 + l2 + carry;
    return {data: (result % 10), carry: Math.floor(result/10)}
}

//result = (result+ '').split('').map(i => { return parseInt(i)})
//if(result.length > 1) return {data: result[1], carry : result[0]}
//else return {data: result[0], carry: 0}



// DOTO recursive way

let listOne = {
    data : 7,
    next: {
        data : 1,
        next: {
            data: 6
        }
    }
}

let listTwo = {
    data : 5,
    next: {
        data : 9,
        next: {
            data: 2
        }
    }
}

console.log(JSON.stringify(sumListsRecursiveOne(listOne, listTwo, 0)))