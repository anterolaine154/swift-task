// Filename: ComplexCode.js
// Content: Complex and Elaborate JavaScript Code

// Create a class representing a Bank Account
class BankAccount {
  constructor(accountNumber, customerName, initialBalance) {
    this.accountNumber = accountNumber;
    this.customerName = customerName;
    this.balance = initialBalance;
    this.transactions = [];
  }

  // Deposit funds into the account
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: "Deposit",
      amount: amount,
      date: new Date()
    });
  }

  // Withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: "Withdrawal",
        amount: amount,
        date: new Date()
      });
    } else {
      console.log("Insufficient balance!");
    }
  }

  // Calculate total interest earned based on the balance
  calculateInterest() {
    const interestRate = 0.05;
    const interest = this.balance * interestRate;
    return interest;
  }

  // Print the account statement
  printStatement() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Customer Name: ${this.customerName}`);
    console.log(`Balance: $${this.balance}`);

    console.log("Transaction History:");
    this.transactions.forEach(transaction => {
      console.log(
        `${transaction.type} of $${transaction.amount} on ${transaction.date}`
      );
    });
  }
}

// Create a BankAccount instance
const bankAccount = new BankAccount("123456789", "John Doe", 1000);

// Perform transactions
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.deposit(1000);
bankAccount.withdraw(1500);

// Print the statement
bankAccount.printStatement();

// Simulate a complex calculation
function performComplexCalculation() {
  let result = 0;

  for (let i = 0; i < 100000; i++) {
    result += Math.sqrt(i ** 2 + 1);
    result -= Math.log(i + 1);
  }

  return result;
}

console.log("Complex Calculation Result:", performComplexCalculation());

// Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random Number between 1 and 100:", generateRandomNumber(1, 100));

// Print some prime numbers using the Sieve of Eratosthenes algorithm
function printPrimeNumbers(max) {
  const primes = [];
  const isPrime = Array(max + 1).fill(true);

  for (let p = 2; p * p <= max; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= max; i += p) {
        isPrime[i] = false;
      }
    }
  }

  for (let p = 2; p <= max; p++) {
    if (isPrime[p]) {
      primes.push(p);
    }
  }

  console.log("Prime Numbers:", primes);
}

printPrimeNumbers(1000);

// Define a complex data structure
const complexData = {
  name: "Complex Object",
  description: "A complex object with nested arrays and objects.",
  nestedArray: [
    {
      id: 1,
      name: "First Item"
    },
    {
      id: 2,
      name: "Second Item"
    }
  ],
  nestedObject: {
    prop1: "Value 1",
    prop2: "Value 2"
  }
};

console.log("Complex Data:", complexData);