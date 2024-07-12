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


// Function expression esme hm gre() ki function se uper call nhi kr skte h 
const gre = function() {
  console.log("Hello! Hello!");
};
gre(); 
 // jese esko hm function ke uper bhi call kr skte h 
 gree();
 function gree() {
  console.log("function ke uper bhi call kra skte h");
};
gree();

// Arrow function sigle line 
const addAdd = (l,k) => l + k;
 console.log(addAdd(8,6));

// Arrow function multiple line code
const addp = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(addp(10,18));

// Default Parameters 
function greets(name="Guest"){
  console.log(`Hello, ${name}!`);
}
greets();
greets('Shyam');

function pos(a=0, b=0){
  return a*b;
}
console.log(pos(11,18));

// Rest parameters
function total(...number){
  return number.reduce((f,b)=>f+b,0);
};
console.log(total(265,5,65,98,6,5,2,365,89,45,17,63));

function multiple(mult, ...numb){
  return numb.map(numb => numb * mult);
}
console.log(multiple(5,6,3,53,3,3));

function same(r){
  return r*r;
};
console.log(same(11));

function calculateTotal(price, tax = 15, discount = 5) {
  console.log(price + tax - discount);
}
calculateTotal(105);

function calculateValue(d,g=5,h=30){
  console.log(d+g*h);
}
calculateValue(50);

function repeat(n,action){
  for(let i=5; i<=n; i++){
    action (i);
  }
}
repeat(50,console.log)

let mohan = {
  printNumbers: function() {
      for (let i = 3; i <= 30; i+=3) {
          console.log(i);
      }
  }
};

mohan.printNumbers();

//enter the number for which you want the multip;ication table
// function printTable() {
//   const number = parseInt(prompt("Enter the number for which you want the multiplication table:"));
//   console.log(`Multiplication Table for ${number}:`);
//   for (let i = 1; i <= 10; i++) {
//       console.log(`${number} x ${i} = ${number * i}`);
//   }
// }

// // Call the function
// printTable();

// function abcd() {
//   const numbe = parseInt(prompt("Enter your number:"));
//   console.log(`Multiplication table for ${numbe}:`);
//   for (let a = 1; a <= 10; a++) {
//     console.log(`${numbe} * ${a} = ${numbe * a}`);
//   }
// }

// // Call the function
// abcd();

function button(){
    console.log('Hello world!')
};
button();
 
function shortFunction(a){
  return a*a;
}
 console.log(shortFunction(20));

 const multiple1 = (a, b)=> a*b;
 console.log(multiple1(12,6));

 function defoult(a='guest',b='going to jaipur'){
    return `Hello... ${a} hello sir .... ${b}!`
 }
 console.log(defoult());
 console.log(defoult('welcome','not go to jaipur'));
//rest function me jo hm value dete h us value ko arrow me convate krvate h 
 function rest1(...h){
     console.log(h);
 };
 rest1(2,5,8,3,6,9,1,4,7);

 function destruction({firstName, lastName}){
  return `${firstName}, ${lastName}`;
 }
 const userss = {
  firstName: 'mohan lal',
  lastName: 'prajapat',
  age: 30,
  city: 'jaipur',
 };
 console.log(destruction(userss));

 function squars(t){
  return t*t;
  // return t**t;
  // return t-t;
  // return t+t;
  // return t/t;
 };
 console.log(squars(16));

 //Function Declaration
 function declaration4(g,k){
     return g*k;
  // return g-k;
  // return g+k;
  // return g/k;
 };
  console.log(declaration4(25,15));

  // Function Expression 
  const expression = function(g,k){
    // return g*k;
    // return g-k;
    // return g+k;
    return g/k;
  };
  console.log(expression(50,15));

  // Arrow Functions
  const arrowFunction = (j,s) => j*s;
  console.log(arrowFunction(5,6));
  // Default Parameters
  function defaulta(r='sohan'){
    return `Hello, ${r}..ji`
  };
  console.log(defaulta());
  console.log(defaulta('mohan'));
  // Rest Parameters
  function rest4(...m){
    console.log(m);
  };
  rest4(5,6,8,9,2,3,6);

  // Destructuring Parameters

  function destruc({firstName, lastName}){
    return `${firstName} ${lastName}`;
   }
   const data = {
    firstName: 'mahender',
    lastName: 'yadav',
    age: 15,
    city: 'jaipur',
   };
   console.log(destruc(data));

   //pure function
   function pures(u){
    return u*u;
   };
   console.log(pures(32));
   // Destructuring Parameters
   function pqrs({age,name,date}){
    return `${age} ${name} ${date}`;
   };
   const userNames = {
    name:'sohan lal',
    age:21,
    date:'10/05/2020',
    number:9632583698,
    id:159357852,
   };
   console.log(pqrs(userNames));

   //
   
  
