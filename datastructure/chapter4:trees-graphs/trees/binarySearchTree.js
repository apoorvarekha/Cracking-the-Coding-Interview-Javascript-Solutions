class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        let node = this.root;
        if(!node){
            this.root = new Node(data);
            return
        }else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data)
                        return;
                    }else{
                        return searchTree(node.left)
                    }

                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data)
                        return
                    }else{
                        return searchTree(node.right)
                    }
                }else{
                    return null
                }
            }
            return searchTree(node);
        }
    };

    findMin(){
        let current = this.root;
        while(current.left){
            current = current.left
        }
        return current.data
    }

    findMax(){
        let current = this.root;
        while(current.right){
            current = current.right
        }
        return current.data
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(current.data === data){
                return true
            }
            if(data < current.data){
                current = current.left
            }else{
                current = current.right
            } 
         }
         return false
        }

    remove(data){
        const removeNode = function(node, data){
            if(node === null){
                return null
            }
            if(data === node.data){
                if(node.left === null && node.right === null){
                    return null
                }else if(node.left === null){
                    return node.right
                }else if(node.right === null){
                    return node.left
                }

                let tempNode = node.right
                while(tempNode.left !== null){
                    tempNode = tempNode.left
                }

                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data);
                return node

            }else if(data < node.data){
                node.left = removeNode(node.left, data)
                return node
            }else {
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }

    findMinHeight(node = this.root){
        if(node == null){
            return -1
        }
        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)
        if(left < right){
            return left + 1;
        }else{
            return right + 1;
        }
    }

    findMaxHeigth(node = this.root){
        if(node == null){
            return -1
        }

        let left = this.findMaxHeigth(node.left)
        let right = this.findMaxHeigth(node.right)

        if(left > right){
            return left + 1
        }else{
            return right + 1
        }
    }

    isBalanced(){
        return (this.findMinHeight() >= this.findMaxHeigth() -1) ? true : false
    }

    inOrder(){
        if(this.root === null){
            return null;
        }else{
            let result = [];
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root)
            return result
        }
    }

    preOrder(){
        if(this.root == null){
            return null;
        }else{
            let result = [];
            function traversePreOrder(node){
                result.push(node.data);
                node.left && traversePreOrder(node.left)
                node.right && traversePreOrder(node.right)
            }
            traversePreOrder(this.root)
            return result
        }
    }

    postOrder(){
        if(this.root == null){
            return null;
        } else {
            let result = [];
            function traversePostOrder(node){
                node.left && traversePostOrder(node.left)
                node.right && traversePostOrder(node.right)
                result.push(node.data);
            }
            traversePostOrder(this.root)
            return result
        }
    }

    levelOrder(){
        let result = [];
        let Q = [];
        if(this.root != null){
            Q.push(this.root)
            while(Q.length > 0){
                let node = Q.shift()
                result.push(node.data)
                if(node.left){
                    Q.push(node.left)
                } 
                if(node.right){
                    Q.push(node.right)
                }
            }
            return result
        }else{
            return null
        }
    }

}

    let bst = new BST()
    bst.add(9)
    bst.add(4)
    bst.add(17)
    bst.add(3)
    bst.add(6)
    bst.add(10)
    bst.add(22)
    bst.add(5)
    bst.add(7)
    bst.add(20)

    console.log(bst.findMinHeight())
    console.log(bst.findMaxHeigth())
    console.log(bst.isBalanced())
    // bst.remove(7)
    console.log(bst.findMinHeight())
    console.log(bst.findMaxHeigth())
    console.log(bst.isBalanced())
    console.log(bst.findMin())
    console.log(bst.findMax())
    console.log(bst.findMax())
    console.log(bst.isPresent(4))

    console.log(bst.inOrder())
    console.log(bst.preOrder())
    console.log(bst.postOrder())
    console.log(bst.levelOrder())

    // 4 == null - false
    // r = ? findMinHeight(6)
    // 6 == null               
    // findMinHeight(null)
    // null == null, r = -1
    // l = 0 findMinHeight(5)
    // null == null
    // r = -1
    // l = -1
    // r+1 = -1+1 = 0
