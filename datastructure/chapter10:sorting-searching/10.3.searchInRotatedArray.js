/** time - o(log n) space -o(1) */
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

console.log(search([24, 25, 26, 27, 30, 31, 13, 18, 23], 18))