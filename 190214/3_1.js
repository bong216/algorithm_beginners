/*
*3.1* 한 개로 세개 : 배열 한개로 스택 세 개를 어떻게 구현할지 설명하라.
_*힌트*_ : _#2,_ _#12,_ _#38,_ _#58_
 */

 class ThreeStack {
    constructor(){
        this.stackNum = 3;
        this.stackSize = undefined;
        this.values = [];
        this.sizes = [];
    }

    push(stackNum, value) {
        if(this.isFull()) {
            sizes[stackNum]++;
            values[indexOfTop(stackNum)] = value;
        }
    }

    pop(stackNum) {
        if(!this.isEmpty()) {
            var top = indexOfTop(stackNum);
            var value = values[top];
            values[top] = 0;
            sizes[stackNum]--;
            return value;
        }
    }

    peek(stackNum) {
        if(!this.isEmpty()) {
            return values[indexOfTop(stackNum)];
        }
    }

    isEmpty(stackNum) {
        return sizes[stackNum] == 0;
    }

    isFull(stackNum) {
        return sizes[stackNum] == stackSize;
    }
    indexOfTop(stackNum) {
        var offset = stackNum * stackSize;
        var size = sizes[stackNum];
        return offset + size -1;
    }
 }

let threestack = new ThreeStack();
console.log(threestack);
