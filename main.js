// number 

// integerNumber
let integerNumber = 20;
console.log(integerNumber);
console.log(typeof integerNumber);
// flotNumber
let flotNumber = 10.25;
console.log(flotNumber);
console.log(typeof flotNumber);

// string
// singilCode
let singilCode = 'shankar lal kumhar'
console.log(singilCode);
console.log(typeof singilCode);
// doubleCode
let doubleCode = "shankar lal kumhar"
console.log(doubleCode);
console.log(typeof doubleCode);
// boolean
//true
let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);
// false
let isTired = false;
console.log(isTired);
console.log(typeof isTired);
//undefined
let notAssigned;
console.log(notAssigned);
console.log(typeof notAssigned);
// null
let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);
// bigint number
let bigintNumber = 34562532513254698785695125365897456;
console.log(bigintNumber);
console.log(typeof bigintNumber);
// object
let person = {
    firstName: 'shankar',
    lastName: 'kumhar',
    age: 23,
    gamil: "ucc.shankarlalkumhar@gamli.com",
};
console.log(person);
console.log(typeof person);

const company = {
    name: "Tech Solutions",
    location: {
      city: "San Francisco",
      state: "CA"
    },
    work:"web devloper",
    employees: 100
  };
  console.log(company);
console.log(typeof company);

// array

let number = [1, 2, 3, 4, 5, 6];
console.log(number);
console.log(typeof number);

const fruits = ["apple", "banana", "cherry","mango"];
console.log(fruits);
console.log(typeof fruits);

let mixArray = [
    "ram",35,false,true,{name:"mohan",village:"chomu", rollNo:630,city:"jaipur"},[10,20,30,40,50,60,70],{name:"rahul",city: "chomu"}
];
console.log(mixArray);
console.log(typeof mixArray);

function add(a,b){
    return a + b;
};
let functionq = add(20,50);
console.log(functionq);
console.log(typeof add);
console.log(typeof functionq);

 // var let const  enko function ke ander use kr skte bhar difine krke bhi or function ke ander difine krke enko bhar use nhi kr skte h  

let globalVar = "I am global";

function checkScope() {
    let globalVar = "globalvar"
    // document.write(globalVar);
  console.log(globalVar); 
}
checkScope(); 
console.log(globalVar);

let abc = "I am global"
{
   let abc = "i am block scope"
    document.write(abc +"<br>");
}
document.write(abc);
  // is Even or odd number in if else se 
const isEvenOrOdd = function(number) {
  if (number % 2 === 0) {
      return ` is even.`;
  } else {
      return ` is odd.`;
  }
};

console.log(isEvenOrOdd(16)); // Output: 16 is even.
console.log(isEvenOrOdd(7)); // Output: 7 is odd.

// if else se grade dena 
const grade = function(marks) {
  if (marks >= 90) {
      return 'A';
  } else if (marks >= 80) {
      return 'B';
  } else if (marks >= 70) {
      return 'C';
  } else if (marks >= 60) {
      return 'D';
  } else {
      return 'F';
  }
};

console.log(grade(85)); // Output: B
console.log(grade(55)); // Output: F
console.log(grade(92)); // Output: A
console.log(grade(75)); // Output: C
console.log(grade(62)); // Output: D

// Function Declaration
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Function Expression
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(5, 2)); // 3
              
           

// Arrow Function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 20)); // 60


function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet('Alice')); // Hello, Alice!  
  

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
  

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const user1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

console.log(getFullName(user1)); // John Doe    
  

function calculateTotal(price, tax) {
  return price + tax;
}

function fetchUserData(userId) {
  // Fetch user data from a database or API
}              
  
function square(x) {
  return x * x;
}

console.log(square(4)); // 16
console.log(square(4)); // 16        
  

// function applyOperation(a, b, operation) {
//   return operation(a, b);
// }

// const add = (x, y) => x + y;
// const multiply1 = (x, y) => x * y;

// console.log(applyOperation(3, 4, add)); // 7
// console.log(applyOperation(3, 4, multiply1)); // 12            
  

// function divide(a, b) {
//   if (b === 0) {
//       throw new Error('Division by zero is not allowed.');
//   }
//   return a / b;
// }

// try {
//   console.log(divide(4, 2)); // 2
//   console.log(divide(4, 0)); // Error
// } catch (error) {
//   console.error(error.message); // Division by zero is not allowed.
// }           
  
    
function addValue(a,b){
  return a+b
}
// console.log(addValue(10,10));
let sum1 = addValue(4,8)
console.log(sum1);

const subtract1 = function(d, c){
  return d - c;
}
console.log(subtract1(10,7))
userName()
function userName(){
  console.log("ram ram mohan")
}
 userName()

 function greet1 (name = "Guest"){
  return `hello, ${name}!`;
 }
 console.log(greet1());
 console.log(greet1('Alice'));

 function sum(...number){
  return number.reduce((total1, sum2)=>total1 * sum2, 4);
 }
 console.log(sum(1,2,3,4));
 console.log(sum(4,8,12,16,20,24));

 function getFullName({firstName, lastName, age}){
     return `${firstName} ${lastName} ${age}`;
 };

 const user = {
  firstName: 'Shankar',
  lastName: 'kumhar',
  age:24,
  city:"chomu"
 };
 console.log(getFullName(user));

function squar(m){
  return m*m;
}
console.log(squar(9));

function applyOperation(p,o,operation){
  return operation(p,o);
}
const addd = (x, y)=> x + y;
const multi = (x, y)=> x * y;

console.log(applyOperation(5,6, addd));//11
console.log(applyOperation(5,6, multi));//30
