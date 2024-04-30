// Reverse a string

str = "hello"
function reverse(str)
{
    let newstr = []
    for( let i = str.length-1 ; i >=0 ; i --)
    {
        newstr[newstr.length] = str[i] ;
    }
    newstr = newstr.join("")
    return newstr;
}
console.log(reverse(str));