//1=sum
function sum(n) {
    let sum = 1; 
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const n = 50;
console.log(The sum of numbers from 1 to ${n} is: ${(n)});


//2=reverse

function reverseArray(arr) {
    let reversed = []; 
    let index = arr.length - 1; 

    while (index >= 0) {
        reversed.push(arr[index]); 
        index--; 
    }

    return reversed; 
}

const originalArray = [10,11,12,13,14,15];
const reversedArray = reverseArray(originalArray);
console.log(Original Array: ${originalArray});
console.log(Reversed Array: ${reversedArray});

//3=sum even
function sumEven(arr) {
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            sum += arr[i]; 
        }
    }

    return sum; 
}

const numbersArray = [10,11,12,13,14,15];
const evenSum = sumEven(numbersArray);
console.log(The sum of even numbers in the array is: ${evenSum});