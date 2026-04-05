// 2. Sum of Digits using Method
// Create:
// static int sumOfDigits(int num)
// 👉 Input: 1234 → Output: 10
// 👉 Call method from main

import java.util.Scanner;
public class Sumofdigits{
    static int sumOfDigits(int num){
        int sum = 0;
        while(num>0)
        {
            sum += num % 10 ;
            num = num / 10;
        }
        return sum;
    }

    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        System.out.println(sumOfDigits(num));
    }
}