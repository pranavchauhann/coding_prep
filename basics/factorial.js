let number = 5;
function factorial(number)
{
    let fact = 1;
    for ( let i = number ; i > 0 ; i --)
    {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(number))