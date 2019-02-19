/*
4_2 isBinaryTreeBalanced check
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
        return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    }

    maxDepth(node) {
        if(typeof node === 'undefined') {
            return 0;
        }
        return Math.max(maxDepth(node.left), maxDepth(node.right));
    }

    /* balanced or unbalanced check 
    isBinaryTreeBalanced (root) {
        if(typeof root === 'undefined') {
            return undefined;
        }
        return maxDepth(root) - minDepth(root) <= 1;
    }
    */
   
    getHeight (root) {
        if(root === null) {
            return 0;
        }
        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }
    
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

// BST.insert(1);
// BST.insert(2);
// BST.insert(4);
// BST.insert(8);
// BST.insert(10);
bst.insert(12);
console.log(bst);
let root = bst.getRootNode();

console.log(root);

bst.isBalanced(root);
// var height = BST.heightSlow();
// console.log(height);