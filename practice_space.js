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