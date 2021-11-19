function search1(strings, str){
    if(strings == null || str == null, str == ""){
        return -1
    }
    return search(strings, str, 0, strings.length -1)
}

function search(strings, str, first, last){
    if(first > last) return -1;

    let mid = Math.floor((first + last)/2)

    if(strings[mid] == ""){
        let left = mid - 1;
        let right = mid + 1;
        
        while(true){
            if(left < first && right > last){
                return - 1
            }else if(left >= first && strings[left] != ""){
                mid = left;
                break;
            }else if(right <= last && strings[right] != ""){
                mid = right;
                break;
            }

            left--;
            right++;
        }
    }

    if(str === strings[mid]){
        return mid
    } else if( str < strings[mid]){
        return search(strings, str, first, mid-1);
    }else{
        return search(strings, str, mid +1, last)
    }
}


console.log(search1(["apple", "", "", "", "ball", "", "", "cat", "", "", "dog", "", ""], "ball"))