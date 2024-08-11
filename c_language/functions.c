//*************how to run the program***************

// 1. gcc filename.c(functions.c) -o(output) name_of_output_file(funcitons)   this will compile the code 

// 2. ./name_of_output_file(functions)

//*********************************************************************************


// function, pointer, structure and Union

// A function in c is a set of statement that when called perform some specific task.

// Function calling is always a overhead in a c language ie it require more computing power and bandwidth.

// there are three aspect of a funtion in a c.  1. function declaration     2. function call    3. function defination

// A function in c must be declared globally before calling it

// #include <stdio.h>

// int add (int x , int y)
// {
//     return x+y;

// }

// int main()
// {
//     int a = 20;
//     int b = 30;
//     int sum = add(20,30);
//     printf("Sum of %d and %d numbers is : %d \n", a, b, sum);
//     return 0;
// }

// There a two type of functions in c, i.e. user defined function and library (built-in) function.      
//user defined functions must be declared and defined before being used.
// easy to use, convenient, save lot of time.

// computing the square root with a predefined c library(built-in function)

// #include<stdio.h>
// #include<math.h>

// int main ()
// {
//     double a = 46;
//     double b = sqrt(a);
//     printf("sqaure root of %.1f is %.1f \n", a,b);
//     return 0;
// }

// there are four differnet aspect of function calling 
// 1. function without argument and without return value    2.function without argument and with return value   3. function with argument but without return value  4. function with argument and a return value

//no argument and no return value 

// #include<stdio.h>
// void sum();
// int main()
// {
//     sum();
//     return 0;
    
// }
// void sum()
// {
//     int a =10;
//     int b=20;
//     printf("sum of two numbers is %d \n", a+b);
// }

// function without argument and with return value

// #include<stdio.h>

// int sum();

// void main()
// {
//     int a = sum();
//     printf("the multiplication of two numbers is: %d \n", a);
// }

// int sum()
// {
//     int a =10;
//     int b=20;
//     return a*b;
// }

//function with argument and without return value

// program to calculate average of five numbers 

// #include<stdio.h>
// void average( int , int , int , int ,int);
// int main()
// {
//     int b =10,c =10,d=10,e=10,f=10;
//     average(b,c,d,e,f);
//     return 0;
// }

// void average(int b, int c, int d , int e, int f )
// {
    
//     int  g = (b+c+d+e+f)/5;
//     printf("the average of five numbers is : %d \n", g);
// }


//funciton with argument and with return value

// program to check whether a number is even or not

// #include<stdio.h>
// int check();
// int main()
// {
//     int a = 11 , flag =0 ;
//     flag = check(a);

//     if( flag == 1)
//     {
//         printf( "the number % d is even \n", a  );

//     }
//     else{
//         printf( "the number %d is odd \n", a );

//     }
//     return 0;
// }

// int check(int a )
// {
//     if( a % 2 == 0)
//     {
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }


// passing parament to the function

// main()
// {
//     sum( int a, int b);     //these are called arguments 
// }

// sum( a,b );         // these are parameters

