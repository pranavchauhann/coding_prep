//***** call by value and call by reference *********


// if the orginal value is modified that means its call by reference otherwise its call by value.

// #include<stdio.h>
// int main()
// {
//     printf("hello world \n");
//     return 0;

// }

// program to show use of call by value i.e swap the two numbers
#include<stdio.h>
int swap( int , int );
int main()
{
    int a = 10 , b =20;
    swap(a,b);
    printf("the values of a and b  swaping is : \na = % d \n b = %d \n", a,b);
    return 0;
}
int swap(int a, int b)
{
    int c = a;
    a = b;
    b = c;
    printf("the values of a and b after swaping is : \na = % d \n b = %d \n", a,b);
    return a,b; 
}