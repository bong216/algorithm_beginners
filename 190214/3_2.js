/*
*3.2* *스택Min* :
기본적인 push와 pop 기능이 구현된 스택에서 최솟값을 반환하는 min함수를 추가하려고 한다. 어떻게 설계할 수 있겠는가? 
push, pop, min연산은 모두 O(1) 시간에 동작해야 한다.
_*힌트*_ : _#27,_ _#59,_ _#78_ (edited) 
*/

class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        let node = new Node(data);
  
        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    }

    pop() {
        if(!this.isEmpty()) {
            let temp;
            temp = this.top;
            this.top = this.top.previous;
            this.size -= 1;
            return temp;
        }
    }

    peek() {
        if(!this.isEmpty()) {
            return this.top !== null ? this.top.value : null;
        }
    }

    isEmpty() {
        return this.top === null;
    }
    
    min() {
        if(!this.isEmpty()) {
            return this.minValue;
        }
    }
}

class stackMin extends Stack {
    constructor () {
        super();
        this.minStack = new Stack();
        this.minValue = undefined;
    }
    push(value) {
        if(this.minValue === undefined || value <= this.minValue) {
            this.minStack.push(this.minValue);
            this.minValue = value;
        }
        this.minStack.push(value);
    }
    pop() {
        var answer = this.minStack.pop();
        if(answer === this.minValue) {
            this.minValue = this.minStack.pop();
        }
        return answer;
    }
    peek() {
        return this.minStack.peek();
    }
    
    isEmpty() {
        return this.minStack.isEmpty();
    }
    
    min() {
        return this.minValue;
    }
}


let stackmin = new stackMin();
console.log(stackmin);

stackmin.push(4);
console.log(stackmin);
stackmin.push(8);
console.log(stackmin);
stackmin.push(3);
console.log(stackmin);
stackmin.push(2);
console.log(stackmin);
stackmin.push(7);
console.log(stackmin);
console.log(stackmin.min());