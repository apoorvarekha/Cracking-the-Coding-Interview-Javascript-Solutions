function minimalHeightBST(arr){
    if(!arr || !arr.length) return null
        return createMinimalHeightBST(arr, 0, arr.length-1)
}

function createMinimalHeightBST(arr, start, end){
    if(start > end) return null;

    let middleIndex = Math.ceil((start+end)/2)
    let rootNode = new TreeNode(arr[middleIndex]);
    rootNode.left = createMinimalHeightBST(arr, start, middleIndex -1);
    rootNode.right = createMinimalHeightBST(arr, middleIndex +1, end)
    return rootNode
}

class TreeNode {
    constructor(data, left =null, right = null){
        this.data =  data;
        this.left = left;
        this.right = right;
    }
}

let arry = [5, 7, 10, 12, 15, 26, 35]

console.log(minimalHeightBST(arry))