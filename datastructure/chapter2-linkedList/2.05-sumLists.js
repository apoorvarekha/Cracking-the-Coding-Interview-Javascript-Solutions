function sumList(list1, list2){
    while(list1 || list2){
        let sum = sumListData(list1.data, list2.data)
        console.log(sum)
        list1 = list1.next
        list2 = list2.next
    }
}

const sumListData = (l1, l2) => {
    let result = l1 + l2;
    result = (result+ '').split('').map(i => { return parseInt(i)})
    return {data: result[0], carry : result[1]}
}


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

console.log(sumList(listOne, listTwo))