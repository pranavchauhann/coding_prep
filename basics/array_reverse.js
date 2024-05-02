// Reverse an array

arr=[1,2,3,4,5]


function reverse(arr)
{
    let newarr = []
    for( let i = arr.length-1 ; i >=0 ; i--)
    {
        newarr[newarr.length] = arr[i];
    }
    return newarr;
}
console.log(reverse(arr))