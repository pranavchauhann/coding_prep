// Number of occurance of character in a string

str = "helloaaa";
char = "a";
function occurance(str,char)
{
    let count = 0;
    for( let i = 0 ; i < str.length ; i++)
    {
        if( str[i] === char)
        {
            count ++;
        }
    }
    return count;
}
console.log(occurance(str,char))