/*
*1.8*  0행렬 : M * N 행렬의 한 원소가 0일 경우, 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘을 작성하라.
*/

import java.util.*;

public class Practice1 {
    
    private static int[][] Zeromatrix (int[][] matrix) {
        int[] row = new int[matrix.length];
        int[] col = new int[matrix[0].length];
        int num1 = 0;
        int num2 = 0;
        int count = 0;

        boolean[][] copyMatrix = new boolean[row.length][col.length];

        for (int i = 0; i < matrix.length; i++) {
            for(int j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] == 0) {
                    num1 = i;
                    num2 = j;
                    
                    for(int x = 0; x < col.length; x++) {
                        copyMatrix[num1][x] = true;
                    }
                    for (int y = 0; y < row.length; y++) {
                        copyMatrix[y][num2] = true;
                    }
                    System.out.println();
                    
                }

            }
        }
        for(int i = 0; i < row.length; i++) {
            for (int j = 0; j < col.length; j++) {
               if(copyMatrix[i][j] == true) {
                   matrix[i][j] = 0;
               }
            }
            System.out.println();
        }
        return matrix;
    }
        
    
    public static void main(String[] args) {
        int mat[][] = {
            { 0, 1, 2, 4},
            { 3, 0, 5, 5},
            { 6, 7, 8, 9}
        };  
        Zeromatrix(mat);

        for(int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                System.out.print(mat[i][j]);
            }
            System.out.println();
        }
    }
}

//O(n2)