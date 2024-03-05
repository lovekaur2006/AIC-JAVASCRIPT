//Declaring variables using 'var':
var a = 78;
var b = "love";
console.log(a);
console.log(b);

//Declaring variables using 'let':
let x = 56;
x = 45;
console.log(x);

// Declaring variables in JS using 'const':
//cannot be reassigned
const pi = 3.14;
//pi = 2.22;------> This will show an error
console.log(pi);

//Why to use 'let' more than 'var'
//It is because 'let' has block scope, which means it is limited to the block of code it is declared in. This helps prevent unintended variable hoisting and scope -related issues.
