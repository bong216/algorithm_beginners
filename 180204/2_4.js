/*
 *분할* : 값 x가 주어졌을 때 x 보다 작은 노드들을 x보다 크거나 같은 노드들보다 앞에 오도록 하는 코드를 작성하라. 
만약 x가 리스트에 있다면 x는 그보다 작은 원소들보다 뒤에 나오기만 하면 된다. 
즉 원소 x는 ‘오른쪽 그룹’ 어딘가에만 존재하면 된다. 왼쪽과 오른쪽 그룹 사이에 있을 필요는 없다.
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };
    makeNode (val) {
        var node = {};
        node.val = val;
        node.next = null;
        return node;
    }
    partition(val) {
        var left = new LinkedList();
        var right = new LinkedList();
        var iterator = this.head;
      
        while (iterator) {
          if (iterator.val < val) {
            left.addToTail(iterator.val);
          } else if (iterator.val >= val) {
            right.addToTail(iterator.val);
          }
          iterator = iterator.next;
        }
      
        if (left.head === null) {
          return right;
        }
        if (right.head === null) {
          return left;
        } else {
          var pointer = left.head;
          while (pointer.next) {
            pointer = pointer.next;
          }
          pointer.next = right.head;
          left.tail = right.tail;
          return left;
        }
    }
    addToTail (value) {
        var newTail = this.makeNode(value);
        if (!this.head) {
          this.head = newTail;
        }
        if (this.tail) {
          this.tail.next = newTail;
        }
        this.tail = newTail;

    }
}

  const list = new LinkedList();
    list.addToTail(3);
    list.addToTail(4);
    list.addToTail(8);
    list.addToTail(5);
    list.addToTail(10);
    list.addToTail(2);
    list.addToTail(1);

    console.log(list);

    //o(n)