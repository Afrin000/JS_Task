// check number is EvenorOdd
function EvenOrOdd(number) {
    if ( number % 2 === 0){
        return "even";}
        else{
            return "odd";}
    }
    console.log(EvenOrOdd(676));
    console.log(EvenOrOdd(547));
// using for loop print all number b/w 1-50 divisible by 3
    for(let i = 1; i <= 50; i++){
        if (i % 3 === 0)
        {
            console.log(i);
            
        }}
// calculte the factorial of a given number using a loop
        function factorial(number){
            let result = 1;
            for (let i = 1; i <= number; i++){
                result *= i;
            }
            return result;
        }
        console.log(factorial(5));
        console.log(factorial(10));
// calculate sum of all even number from 1-n using loop
        function Sum(n){
            let sum = 0;
            for(let i = 1; i <= n; i++){
                if(i % 2 === 0){
                    sum += i;
                }}
                return sum;
        }
        console.log(Sum(2));
        console.log(Sum(50));
// print all even num from 1-n using a loop
        function Even(n) {
            for ( let i = 1; i <= n; i ++){
                if ( i % 2 === 0){
                    console.log(i);
                    }}} 
                    console.log(Even(10));
                    console.log(Even(78));