function multiply( x,  y)
{
    /* 0 multiplied with anything gives 0 */
    if(x == 0 || y == 0)
    return 0;
 
    /* Add x one by one */
    if(y > 0 )
    return (x + multiply(x, y-1));
 
    /* the case where y is negative */
    if(y < 0 )
    return -multiply(x, -y);
}

console.log(multiply(-1,-230))
    
    function divide( num1, num2)
    {
        if (num1 == 0)
            return 0;
        if (num2 == 0)
            return Number.MAX_VALUE;;
        let negResult = false;
 
        // Handling negative numbers
        if (num1 < 0)
        {
            num1 = -num1;
            if (num2 < 0)
                num2 = -num2;
            else
                negResult = true;
        }
        else if (num2 < 0)
        {
            num2 = -num2;
            negResult = true;
        }
 
        // if num1 is greater than equal to num2
        // subtract num2 from num1 and increase
        // quotient by one.
        let quotient = 0;
        while (num1 >= num2)
        {
            num1 = num1 - num2;
            quotient++;
        }
 
        // checking if neg equals to 1 then making
        // quotient negative
        if (negResult)
            quotient = -quotient;
        return quotient;
    }

    console.log(divide(8, 4))

    function modulo(num, divisor){
    let t = (num - multiply(divisor, parseInt(divide(num, divisor))));
    return t;
}

console.log(modulo(33, 10))