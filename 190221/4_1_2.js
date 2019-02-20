/*
4.1 * 노드사이의 경로 *: 방향 그래프가 주어졌을 때 두 노드 사이에 
경로가 존재하는지 확인하는 알고리즘을 작성하라.
힌트 #127
-> Graph 구현
*/

class Graph {
    constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
    }
    /* add */
    addVertex (vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }
    /* remove */
    removeVertex (vertex) {
        var index = this.vertices.indexOf(vertex);
        if(!index) {
            this.vertices,splice(index, 1);
        }
        while (this.edges[vertex].length) {
            var adjacentVertex = this.edges[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
    }

    addEdge (vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
    }
    removeEdge (vertex1, vertex2) {
        var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
        if (!index1) {
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }
        if (!index2) {
            this.edges[vertex2].splice(index2, 1);
        }
    }

    size() {
        return this.vertices.length;
    }
    relations() {
        return this.numberOfEdges;
    }

    traverseBFS (vertex, fn) {
        if(this.vertices.indexOf(vertex) == -1) {
            return console.log("not found");
        }
        var queue = [];
        queue.push(vertex);
        var visited = [];
        visited[vertex] = true;

        while (queue.length) {
            vertex = queue.shift();
            fn(vertex);
            for (var i = 0; i < this.edges[vertex].length; i++) {
                if (!visited[this.edges[vertex][i]]) {
                    visited[this.edges[vertex][i]] = true;
                    queue.push(this.edges[vertex][i]);
                }
            }
        }
    }

    pathFromTo(vertexSource, vertexDestination) {
        if (this.vertices.indexOf(vertexSource) == -1) {
            return console.log('Vertex not found');
        }
        var queue = [];
        queue.push(vertexSource);
        var visited = [];
        visited[vertexSource] = true;
        var paths = [];

        while (queue.length) {
            var vertex = queue.shift();
            for (var i = 0; i < this.edges[vertex].length; i++) {
                if (!visited[this.edges[vertex][i]]) {
                    visited[this.edges[vertex][i]] = true;
                    queue.push(this.edges[vertex][i]);
                    paths[this.edges[vertex][i]] = vertex;
                }
            }
        }
        if (!visited[vertexDestination]) {
            return undefined;
        }

        var path = [];
        for (var j = vertexDestination; j != vertexSource; j = paths[j]) {
            path.push(j);
        }
        path.push(j);
        return path.reverse().join('-');
    }
    print() {
        console.log(this.vertices.map(function (vertex) {
            return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
        }, this).join(' | '));
    }
}


var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
console.log('graph size', graph.size()); // => 6
console.log('graph relations', graph.relations()); // => 7
graph.traverseBFS(1, vertex => { console.log(vertex); });
graph.traverseBFS(0, vertex => { console.log(vertex); }); 
console.log('path from 3 to 4:', graph.pathFromTo(3, 4)); // => 3-4