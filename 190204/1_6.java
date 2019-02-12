/*
*1.6* 문자열 압축 : 반복되는 문자의 개수를 세는 방식의 기본적인 문자열 압축 메서드를 작성하라.
 예를 들어 문자열 aabcccccaaa를 압축하면 a2b1c5a3이 된다. 만약 ‘압축된’ 문자열의 길이가 
 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다. 문자열은 대소문자 알파벳(a~z)으로만 이루어져 있다.
*/

import java.util.*;

public class Practice1 {
    
    private static String isCompression (String str) {
        String compressionStr = "";
        int count = 0;

        for(int i = 0; i < str.length(); i++) {
            count++;
            if(i+1 >= str.length() || str.charAt(i) != str.charAt(i+1)) {
                compressionStr += " " + str.charAt(i) + count;
                count = 0;
            }
        }
        if(compressionStr.length() > str.length())
            return compressionStr;
        else
            return str;
    }
        

    public static void main(String[] args) {
        String str = "aabccccaaa";
        System.out.print(isCompression(str));
    }

}

//O(n)