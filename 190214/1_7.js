/*
*1.7* 행렬회전 : 이미지를 표현하는 N * N 행렬이 있다. 이미지의 각 픽셀은 4바이트로 표현된다. 
이때, 이미지를 90도 회전시키는 메서드를 작성하라. 행렬을 추가로 사용하지 않고서도 할 수 있겠는가?
*/

function rotateMatrix(matrix) {  
    const val = 0;     
    const N = matrix.length - 1; 
    const result = matrix.map((row, i) => 
         row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;      
    matrix.push(...result);  
    return matrix;
}
const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

console.log(arr);
rotateMatrix(arr);
console.log(arr);

