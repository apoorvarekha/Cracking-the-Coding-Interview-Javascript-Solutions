function findIntersection(list1, list2){
    
    let list1Info = findLengthAndLastNode(list1);
    let list2Info = findLengthAndLastNode(list2);
   
    if(JSON.stringify(list1Info.node) != JSON.stringify(list1Info.node)) return null

    let difference = list1Info.size - list2Info.size 
    let shorter = difference <= 0 ? list1 : list2;
    let longer = difference >= 0 ? list1 : list2;
   
    if(difference != 0) longer = getKthNode(longer, Math.abs(difference))
    while(longer != shorter){
        longer = longer.next;
        shorter = shorter.next
    }
    return longer

}

const getKthNode = (list, length) => {
    let count = 0
    while(count < length && list){
        count++
        list = list.next
    }
    return list
}

const findLengthAndLastNode = (list) => {
   
    let size = 1;
    while(list.next){
        size++
        list = list.next
    }
    return {size, node: list}
}
// let listOne = {
//     data : 7,
//     next: commonList
// }

// let listTwo = {
//     data : 5,
//     next: {
//         data : 9,
//         next: {
//             data : 8,
//                 next: {
//                     data : 1,
//                     next: {
//                         data: 6
//                     }
//                 }
//         }
//     }
// }

let four = {
    data : 4,
    next : null
}

let three = {
    data : 3,
    next : four
} 
let two = {
    data : 2,
    next : three
}

let one = {
    data : 1,
    next : two
}

console.log(findIntersection(one, three))
