/*
*중간* *노드* *삭제* : 단반향 연결리스트가 주어졌을 때 중간(정확히 가운데 노드일 필요는 없고 처음과 끝 노드만 아니면 된다)에 있는 노드 하나를 삭제하는 알고리즘을 구현하라. 단, 삭제할 노드에만 접근 할 수 있다.
예제) *입력* : 연결리스트 a -> b -> c -> d -> e에서 노드 c
*결과* : 아무것도 반환할 필요는 없지만, 결과로 연결리스트 a -> b -> d -> e가 되어 있어야한다.
*/

class Node {
    constructor(element){
      this.element = element;
      this.next = null;
    }
  }
  class LinkedList{
    constructor(){
      this.head = new Node("head");
    }
      find(item){
        let currNode = this.head;
        while(currNode.element != item){
          currNode = currNode.next;
        }
        return currNode;
      }
      insert(newElement, item){
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
      }
      display(){
        let currNode = this.head;
        while(!(currNode.next == null)){
          console.log(currNode.next.element);
          currNode = currNode.next;
        }
      }
      findPrevious(item){
        let currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)){
          currNode = currNode.next;
        }
        return currNode;
      }
      remove(item){
        let prevNode = this.findPrevious(item);
        if(!(prevNode.next == null)){
          prevNode.next = prevNode.next.next;
        }
      }
  }
   
  const ll = new LinkedList();
  ll.insert("a","head");
  ll.insert("b","a");
  ll.insert("c","b");
  ll.insert("d","c");
  ll.insert("e","d");
  ll.insert("f","e");
  ll.display();
  ll.remove("c");
  console.log('');
  ll.display();


  //O(n)