// 3. Palindrome using Method (clean design)

// Create:
// static boolean isPalindrome(int num)
// 👉 Return true/false
// 👉 Print result in main

public class Palindrome {

    public static boolean isPalindrome(int num) {

        int original = num;
        String temp = "";

        while(num > 0)
        {
            temp = temp + num % 10;
            num = num / 10;
        }

        int reversed = Integer.parseInt(temp);

        if(original == reversed)
        {
            return true;
        }

        return false;
    }

    public static void main(String[] args) {

        System.out.println(isPalindrome(126521));

    }
}