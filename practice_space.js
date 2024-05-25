// Coding Practice

// string reverse
str = "helloo";
function reverse(str)
{
    let newstr = []
    for ( let i = 0 ; i < str.length ; i ++)
        {
            newstr[newstr.length] = str[str.length-1-i]
        }
    return newstr;
}
console.log(reverse(str));

//  palindrome of a string

function palindrome(str)
{
    for ( let i = 0 ; i < str.length/2 ; i++)
        {
            if ( str[i] !== str[str.length-1])
                {
                    return false;
                }
            else
            {
                return true;
            }
        }
}
console.log(palindrome(str));

// lcm of a number 

let num1 = 3;
let num2 = 4;

function lcm(num1, num2)
{
    do 
    {
        
    } 
    while (i/num1 === 0 && i/num2 ===0);
}

// gcd of two numbers