//1. TYPE CONVERSIONS
// Convert "123" into a number
let str = "123"
let num = Number(str);
console.log(typeof num);

// Convert 5 into a string
let num1 = 5
let string = String(num1)
console.log(typeof string);

// Convert a boolean into a number
let bool = true
let num2 = Number(bool)
console.log(num2);
console.log(typeof num2);

//2. STRING MANIPULATION 
// Concatenate two strings "hello" and "world" together into a single string 
let greet = "hello" + "world"
console.log(greet);

// Find the length of string "Javascript"
let lang = "Javascript"
console.log(lang.length);

//Extract the string "world" from "hello world"
let newStr = "hello world"
console.log(newStr.slice(6, 11));

//3.  DATA TYPES
// Determine the datatype of variable x=10-----> Number
let x = 10
console.log(typeof x);

//Determine the data type of the variable y="Hello"---------> String
let y = "Hello"
console.log(typeof y);

//4. TYPE CHECKING
// Check if the variable a ="123" is a string
let a = "123"
console.log(typeof a);
//It is a string

// Check if the variable b =10 is a number
let b = 10
console.log(typeof b);
//It is a number

// Check if the variable c=true is a boolean
let c = true
console.log(typeof c);
//It is a boolean

// 5. TYPE COERCION
//Explain what happens when you add a string "5" and a number 5
let var1 = "5" + 5
console.log(var1);
//It will return 55-->As compiler will convert the number also into a string

// Explain what happens when you compare a string "10" and a number 10 using == operator
let var2 = "10"
let var3 = 10
console.log(var2 == var3);
// It will return true 

// Explain the difference between == and === operators
// Both == and === will check the equality but === will strictly check the equality without any type conversion
//ex
let var4 = "7"
let var5 = 7
console.log(var4 == var5);     // This will return true 
console.log(var4 === var5);     //This will return false

//4.  TYPE CHECKING
//Check if a 
