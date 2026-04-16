public class Palindrome_array {

    public static void main(String[] args){
        int arr[] = {1,2,2,1};
        int n = arr.length;
        int revarr[] = new int[n];
        int j = 0;

        for(int i = n-1; i >= 0; i--)
        {
            revarr[j] = arr[i];
            j++;
        }

        boolean isPalindrome = true;

        for(int i = 0; i < n; i++)
        {
            if(arr[i] != revarr[i])
            {
                isPalindrome = false;
                break;
            }
        }

        if(isPalindrome)
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");
    }
}