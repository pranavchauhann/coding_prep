// check for palindrome of a string

let str = "naman";
function palindrome(str)
{
    for( let i = 0 ; i < (str.length)/2 ; i++)
    {
        if( str[i] !== str[str.length-1-i])
        {
            return false
        }
    }
    return true;  
}    
console.log(palindrome(str));

// reverse a string

console.log("hello".split("").reverse().join(""))