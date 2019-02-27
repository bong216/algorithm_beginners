/*
4.4 균형 확인: 이진트리가 균형 잡혀있는지 확인하는 함수를 작성하라.
이 문제에서 균형 잡힌 트리란 모든 노드에 대해서 
왼쪽 부분 트리의 높이와 오른쪽 부분 트리의 높이의 차이가 최대 하나인 트리를 의미한다.
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
//1번
    checkBalanced(bst) {
        if (bst.left === null && bst.right !== null) {
            if (bst.right.left !== null || bst.right.right !== null) {
                return false;
            }
        }
        if (bst.left !== null && bst.right === null) {
            if (bst.left.left !== null || bst.left.right !== null) {
                return false;
            }
        }
        var answer = true;

        if (bst.left !== null) {
            answer = answer && checkBalanced(bst.left);
        }

        if (bst.right !== null) {
            answer = answer && checkBalanced(bst.right);
        }
        return answer;
    }
//2번
    height() {
        return getHeight(this);
    }
    getHeight(root) {
        if (root === null) {
            return 0;
        }
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }

    isBalanced(root) {
        if (root == null) {
            return true;
        }

        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);

        let diff = Math.abs(leftHeight - rightHeight);

        if(diff > 1) 
            return false;
        else
            return isBalanced(root.left) && isBalanced(root.right);
    }
}

const tree1 = new Node(10);
tree1.left = new Node(0);
tree1.left.left = new Node(7);
tree1.left.right = new Node(4);
tree1.right = new Node(12);
const t1 = new BinarySearchTree();
t1.root = tree1;

const tree2 = new Node(1);
tree2.right = new Node(2);
tree2.right.right = new Node(3);
tree2.right.right.right = new Node(4);
const t2 = new BinarySearchTree();
t2.root = tree2;

console.log(t1.checkBalanced(t1));
console.log(t2.checkBalanced(t2));

console.log(t1.isBalanced(t1));
console.log(t2.isBalanced(t2));
