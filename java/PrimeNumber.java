// 1. Prime Numbers in Range

// Create a method:
// static boolean isPrime(int n)
// 👉 Use it to print all prime numbers between 1 to N

import java.util.Scanner;

public class PrimeNumber {

    static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }

        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();

        for (int i = 1; i <= n; i++) {
            if (isPrime(i)) {
                System.out.println(i);
            }
        }
    }
}