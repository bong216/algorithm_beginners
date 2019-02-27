/* 
4.5 BST검증 : 주어진 이진 트리가 이진 탐색 트리인지 확인하는 함수를 작성하라.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    /*node, min = null, max = null*/
    isBST(node, min, max) {
        if (!node) 
            return true;
        if (max !== null && node.data >= max) {
            return false;
        }
        if (min !== null && node.data <= min) {
            return false;
        }
        const leftSide = this.isBST(node.left, min, node.data);
        const rightSide = this.isBST(node.right, node.data, max);

        return leftSide && rightSide;
    }
}

const tree1 = new Node(10);   
tree1.left = new Node(0);
tree1.left.left = new Node(7);   
tree1.left.right = new Node(4);
tree1.right = new Node(12);
const t1 = new BinarySearchTree();
t1.root = tree1;
console.log(t1.isBST(tree1, null, null));

const tree2 = new Node(4);
tree2.left = new Node(2);
tree2.right = new Node(5);
tree2.left.left = new Node(1);
tree2.left.right = new Node(3);
const t2 = new BinarySearchTree();
t2.root = tree2;
console.log(t2.isBST(tree2, null, null));

/*
false
true
*/