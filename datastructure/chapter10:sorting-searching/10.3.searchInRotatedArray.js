/** time - o(log n) space -o(1) 
 * for distinct array element
*/
function search(nums, target){
    let left =0
    let right = nums.length -1;

    while(left <= right){
    
        let mid = Math.floor((left + right)/2);
        console.log(`${left} - ${mid} - ${right}`)

        if(nums[mid] === target) return mid;

        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target < nums[mid]){
                right = mid -1
            }else{
                left = mid +1;
            }
        }else{
            if(nums[mid] < target && target <= nums[right]){
                left = mid +1
            }else{
                right = mid -1;
            }
        }
    }

    return -1;
}

/**
 * time - o(log n) space -o(1) => (for distinct array element)
 */

function searchInDistinctArray(nums, target){
    return searchDistinct(nums, target, 0, nums.length -1)
}

function searchDistinct(nums, target, left, right){
    if(left > right) return - 1;

    let mid = Math.floor((left+right)/2);

    if(nums[mid] === target) return mid;

    if(nums[left] < nums[mid]){
        if(nums[left] <= target && target < nums[mid]){
            return searchDistinct(nums, target, left, mid -1)
        }else{
            return searchDistinct(nums, target, mid +1, right)
        }
    }else{
        if(nums[mid] < target && target <= nums[right]){
            return searchDistinct(nums, target, mid +1, right)
        }else{
            return searchDistinct(nums, target, left, mid - 1)
        }
    }
    return - 1;
}

/**
 * time - o(log n) space -o(1) => (for non distinct array element)
 */

function searchInNonDistinctArray(nums, target){
    return searchNonDistinct(nums, target, 0, nums.length -1)
}

function searchNonDistinct(nums, target, left, right){
    if(left > right) return - 1;

    let mid = Math.floor((left+right)/2);

    if(nums[mid] === target) return mid;

    if(nums[left] < nums[mid]){
        if(nums[left] <= target && target < nums[mid]){
            return searchNonDistinct(nums, target, left, mid -1)
        }else{
            return searchNonDistinct(nums, target, mid +1, right)
        }
    }else if(nums[mid] < nums[right]){
        if(nums[mid] < target && target <= nums[right]){
            return searchNonDistinct(nums, target, mid +1, right)
        }else{
            return searchNonDistinct(nums, target, left, mid - 1)
        }
    }else{
        let location = -1
        if(nums[left] === nums[mid]){
            location = searchNonDistinct(nums, target, mid +1, right)
        }

        if(location === -1 && nums[mid] === nums[right]){
            location = searchNonDistinct(nums, target, left, mid-1)
        }
        return location
    }
}

console.log(search([24, 25, 26, 27, 30, 31, 13, 18, 23], 18)) // 7

console.log(searchInDistinctArray([70, 75, 17, 18, 30, 31, 35, 50, 60], 18)) // 3
console.log(searchInDistinctArray([24, 25, 26, 27, 30, 31, 13, 18, 23], 18)) // 7

console.log(searchInNonDistinctArray([30, 30, 30, 30, 30, 40, 15, 18, 25], 18)) // 7
console.log(searchInNonDistinctArray([40, 15, 18, 25, 30, 30, 30, 30, 30], 18)) // 2