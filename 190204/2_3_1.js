/*
*중간* *노드* *삭제* : 단반향 연결리스트가 주어졌을 때 중간(정확히 가운데 노드일 필요는 없고 처음과 끝 노드만 아니면 된다)에 있는 노드 하나를 삭제하는 알고리즘을 구현하라. 단, 삭제할 노드에만 접근 할 수 있다.
예제) *입력* : 연결리스트 a -> b -> c -> d -> e에서 노드 c
*결과* : 아무것도 반환할 필요는 없지만, 결과로 연결리스트 a -> b -> d -> e가 되어 있어야한다.
***
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;  
        this.head = newNode;       
        this.length++;
        // console.log(value);
        // console.log(newNode);
        // console.log(this.head);
        return this;
    }
    find(val) {
        let thisNode = this.head;
     
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
            thisNode = thisNode.next;
        }
        return thisNode;
    }

    remove(removeNode) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === removeNode) {
            this.removeFromHead();
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === removeNode) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
    printList(list) {
        while(this.length !== 0) {
            console.log(list.value);
        }
    }
}
    const list = new LinkedList();

    list.addToHead('f');
    list.addToHead('e');
    list.addToHead('d');
    list.addToHead('c');
    list.addToHead('b');
    list.addToHead('a');

    list.printList(list);
    //console.log(list);
    var removeNode = list.find('c');



    //O(n)
