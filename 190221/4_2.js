/*
4.2 *최소 트리*: 오름차순으로 정렬된 배열이 있다. 
이 배열 안에 들어 있는 원소는 정수이며 중복된 값이 없다고 했을 때 
높이가 최소가 되는 이진 탐색 트리를 만드는 알고리즘을 작성하라.
힌트 #19, #73, #116

% 편향트리
 == > Balanced Binary Tree
*/
class BinaryNode {
    constructor(key, value) {
        this.value = value;
        this.key = key;
        this.left = null;
        this.right = null;
    }
    // Cost: O(1)
    free() {
        this.left = null;
        this.right = null;
    }
}

class BinaryTreeNode extends BinaryNode {
    constructor() {
        super();
        this.root = null;
    }

    insert(key, value) {
        if (!Number.isInteger(key))
            return;

        const newNode = new BinaryNode(key, value);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else if (newNode.key === node.key) {
            node.value = newNode.value;
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
    remove(key) {
        if (!Number.isInteger(key))
            return;
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node === null)
            return null;
        else if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            const aux = this.findMinimumNode(node.right);
            node.key = aux.key;

            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }


    getRootNode() {
        return this.root;
    }

    minHeight(root) {
        var fringe = [{
            node: root,
            depth: 1
        }];
        var current = fringe.pop();
        var min = 0;

        while (current && current.node) {
            var node = current.node;

            if (node.left) {
                fringe.push({
                    node: node.left,
                    depth: current.depth + 1
                });
            }
            if (node.right) {
                fringe.push({
                    node: node.right,
                    depth: current.depth + 1
                });
            }

            if (current.depth > min) {
                min = current.depth;
            }

            current = fringe.pop();
        }

        return min;
    }
}

let arr = [1, 2, 4, 8, 10, 12];
let bst = new BinaryTreeNode();

bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(8);
bst.insert(10);
bst.insert(12);

console.log(bst);

let root = bst.getRootNode();
console.log(root);
console.log(bst.minHeight(root));

