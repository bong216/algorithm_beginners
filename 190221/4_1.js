/*
4.1 * 노드사이의 경로 *: 방향 그래프가 주어졌을 때 두 노드 사이에 
경로가 존재하는지 확인하는 알고리즘을 작성하라.
힌트 #127
*/

/*Queue */
class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }
    front() {
        return this.dataStore[0];
    }
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] | "\n";
        }
        return retStr;
    }

    empty() {
        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    }
} 
class Graph extends Queue {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph() {
        var get_keys = this.AdjList.keys();

        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }

    bfs(startingNode) {
        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        var q = new Queue();

        visited[startingNode] = true;
        q.enqueue(startingNode);

        while (!q.isEmpty()) {
            var getQueueElement = q.dequeue();

            console.log(getQueueElement);
            var get_List = this.AdjList.get(getQueueElement);

            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

}
let searchroute = new Graph();
searchroute.enqueue(1);
searchroute.enqueue(2);
searchroute.enqueue(3);
searchroute.enqueue(4);

console.log(searchroute.toString());
console.log(searchroute.bfs(3));
// console.log(searchroute.printGraph());

