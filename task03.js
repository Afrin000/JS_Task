// split():

let w = "blueberry,chickoo,Grapes,berry"
console.log(w.split(","));

// replace():

let name ="hello afrin";
console.log(name.replace("hello","hi"));

//substring():

let str = "Hello Banglore";
console.log(str.substring(6));

//map():

let arr1= [1,2,3,4,5];
let newArr = arr1.map(x => x * 2);
console.log(newArr);

//filter():

let arr2 = [1,2,3,4,5,6,7,8,9];
let evenArr = arr2.filter(x => x % 2 === 0);
console.log(evenArr);

//reduce():

let new1 = [1,2,3,4];
let sum = new1.reduce((total, num) => total + num, 0);
console.log(sum);




