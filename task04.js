//1 factorial using math method
function factorial(n) {
    return n < 0 ? 'Invalid input' : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
  }
  console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-1)); // Output: 'Invalid input'


// 2.Math.round()

let number = 7.4;
let result1 = Math.round(number);
console.log(result1);


// 3. Floating-point:

function randomInRange(min, max) {
return Math.random() * (max - min) + min;
}


console.log(randomInRange(2.5, 5.5)); 
console.log(randomInRange(75, 100));