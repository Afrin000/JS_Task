//1

class BankAccount {
    // Private balance property
    #balance;
  
    // Constructor to initialize the balance
    constructor(initialBalance = 0) {
      if (initialBalance < 0) {
        throw new Error('Initial balance cannot be negative');
      }
      this.#balance = initialBalance;
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount <= 0) {
        throw new Error('Deposit amount must be positive');
      }
      this.#balance += amount;
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive');
      }
      if (amount > this.#balance) {
        throw new Error('Insufficient funds');
      }
      this.#balance -= amount;
    }
  
    // Method to check balance (read-only)
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount(100); // Create an account with $100 initial balance

console.log(account.getBalance()); // Output: 100

account.deposit(50);  // Deposit $50
console.log(account.getBalance()); // Output: 150

account.withdraw(30); // Withdraw $30
console.log(account.getBalance()); // Output: 120

// Trying to access balance directly will throw an error
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// Invalid operation example:
try {
  account.withdraw(200);  // Attempt to withdraw more than available balance
} catch (error) {
  console.error(error.message);  // Output: Insufficient funds
}



//2

function greet(name) {
    try {
      if (name === "") {
        throw new Error("Name cannot be empty");
      }
      console.log(`Hello, ${name}!`);
    } catch (error) {
      console.log(error.message);  // Logs "Name cannot be empty"
    }
  }
  greet("Alice");  // Output: Hello, Alice!
greet("");       // Output: Name cannot be empty





