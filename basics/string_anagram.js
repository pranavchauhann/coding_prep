// // to check if two given strings are anagram

let str1 = "hello"
let str2 ="olleho"

function anagram(str1, str2)
{
    str1 = str1.split("");
    str2 = str2.split("");
    console.log(str1);
    console.log(str2);
    for( let i = 0; i < str1.length ; i++)
    {
        for (let j = 0 ; j< str2.length ; j++)
        {
            if( str1[i] === str2[j])
            {
                str2.splice(j,1);
            }
            
            continue;
        }

        
    }
    
    if ( str2.length ===0)
    {
        return true;
    }
    else 
    {
        return false;
    }

}


console.log(anagram(str1,str2))


// str1 = "hello";
// str2 = "olleh";
// str1 = str1.split("");
// str2 = str2.split("");
// console.log(str1);
// console.log(str2);

// for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//         if (str1[i] === str2[j]) {
//             str2.splice(j, 1); // Remove the matching element from str2
//             j--;
//             // Move to the next element in str1 after removing the match
//         }
//     }
// }
// console.log(str2.join('')); // Output the modified str2

