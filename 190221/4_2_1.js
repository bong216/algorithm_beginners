/*
 isBinaryTreeBalanced check
4.2 * 최소 트리 *: 오름차순으로 정렬된 배열이 있다.
이 배열 안에 들어 있는 원소는 정수이며 중복된 값이 없다고 했을 때
높이가 최소가 되는 이진 탐색 트리를 만드는 알고리즘을 작성하라.
힌트 #19, # 73, #116
*/
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree extends Node {
    constructor() {
        super();
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) { 
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {

            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    getRootNode() {
        return this.root;
    }
/*
    minDepth(node) {
        if(typeof node === 'undefined') {
            return 0;
        }
        return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
    }

    maxDepth(node) {
        if(typeof node === 'undefined') {
            return 0;
        }
        return Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
    }
*/
    getHeight(root) {
        if (root === null) {
            return 0;
        }
        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }

    // 1. balanced or unbalanced check  
    isBinaryTreeBalanced (root) {
        if(typeof root === 'undefined') {
            return undefined;
        }
        return this.maxDepth(root) - this.minDepth(root) <= 1;
    }
    
     // 2. balanced or unbalanced check
    isBalanced (root) {
        if(root === null) {
            return true;
        }
        let heightDifference = Math.abs(this.getHeight(root.left) - this.getHeight(root.right));
        if (heightDifference > 1) {
            return false;
        } else {
            return isBalanced(root.left) && isBalanced(root.right);
        }
    }
}

let bst = new BinarySearchTree();

bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(8);
bst.insert(10);
bst.insert(12);
console.log(bst);
let root = bst.getRootNode();

console.log(root);
console.log(bst.isBalanced(root));

var height = bst.getHeight(root);
console.log(height);