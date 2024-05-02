let arr=[2,3,4,5,5,6,2];
function matchingelement(arr)
{
    let newarr = [];
    for(let i = 0; i < arr.length ; i ++)
    {
        for( let j = i +1 ; j < arr.length ; j++)
        {
            if ( arr[i] ===arr[j] )
            {
                
                newarr[newarr.length] = arr[i];
            }
        }
    }
    return newarr
}
console.log(matchingelement(arr))