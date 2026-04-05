// 5. Varargs + Logic (important)

// Create:
// static int findMax(int... nums)
// 👉 Return largest number from inputs
// Example:
// findMax(2, 5, 1, 9, 3) → 9

public class Varargs{

    static int findMax(int... nums)
    {
        int max = nums[0];
        for(int i = 1; i<nums.length; i++)
        {
            if(max < nums[i])
            {
                max = nums[i];
            }
        }
        return max;
    }

    public static void main(String[] args){
        System.out.println(findMax(2,3,5,4,6,7,9));

    }
}