//detrmine given number is positive,negative,zero.
function checkNumber(num) {
    if (num > 0) {
      console.log('positive');
    } else if (num < 0) {
      console.log('negative');
    } else {
      console.log('zero');
    }
  }
  checkNumber(5);    
  checkNumber(-3);   
  checkNumber(0);     

//find min and max vaalues
  const numbers = [3, 5, 7, 2, 9, -1, 4];
  const maxValue = Math.max(...numbers);
  console.log('Max val:', maxValue);  
  const minValue = Math.min(...numbers);
  console.log('Min val', minValue);  

// current date and time
const now=new Date();
console.log(now);

// Function to add 7 days to a given date
function addSevenDays(date) {
  const newDate = new Date(date); 
  newDate.setDate(newDate.getDate() + 7); 
  return newDate;
}
const currentDate = new Date();  
console.log("Current Date:", currentDate);
const newDate = addSevenDays(currentDate);
console.log("New Date (7 days later):", newDate);

//to check if a number is positive
function isPositive(number) {
  if (number > 0) {
      console.log('is a positive number.');
      return true;
  } else {
      console.log('is not a positive number.');
      return false;
  }
}
isPositive(10);  
isPositive(-5);  
isPositive(0);   ]