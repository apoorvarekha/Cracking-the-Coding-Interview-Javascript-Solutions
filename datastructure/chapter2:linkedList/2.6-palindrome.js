



//------> reverse and compare

function palindromeReverse(list){
    let revered = reverseList(list)
    return isEqual(list, revered)
}

function reverseList(list){
    let head;
    // while(list){
    //     if(!head) head = {data: list.data}
    //     else head = {data: list.data, next: head}
    //     list = list.next
    // }
    while(list){
        let n = {data: list.data}
        n.next = head
        head = n;
        list = list.next
    }
    return head
}

function isEqual(list, reversedList){
    while(list && reversedList){
        if(list.data !== reversedList.data) return false;
        list = list.next
        reversedList = reversedList.next
    }

    return (!list && !reversedList)
}

//----> my 1st approach
function palindrome(list){
    let palindromeStr = '';
    while(list){
        palindromeStr += list.data;
        list = list.next
    }
    let compareStr = palindromeStr.split('').reverse().join('');
    return (palindromeStr === compareStr) ?  true : false
}



let list = {
    data : 0,
    next: {
        data : 1,
        next: {
            data: 2,
            next: {
                data: 1,
                next: {
                    data: 0
                }
            }
        }
    }
}

console.log(palindromeReverse(list))