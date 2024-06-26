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

