//DATATYPES
//1. PRIMITIVE
//7 TYPES:  String, Number, Boolean , Null, Undefined, symbol, BigInt
const Id = Symbol('jhl');
const anotherId = Symbol('jhl');
console.log(Id === anotherId);

//2. REFERENCE(NON-PRIMITIVE)
//Array
const fruits = ["apple", "banana", "grapes"];

//Objects
const MyObj = {
    name: "lovepreet",
    age: 18
}

// Functions
const MyFunction = function () {
    console.log("Hello world");
}

// return datatypes
//null=>object
//array=> objject
//object=> object
// function=> function

//--------------------------------------------------------
//Stack (primitive), Heap(Non-Primitive)
let Name = 'Lovepreet';
let myName = Name;
myName = "Lovepreet Kaur";
console.log(Name);
console.log(myName);

// Copy of the values are transferred in Stack memory

let user1 = {
    Section: 'G',
    Course: 'Btech'
}
let user2 = user1;
user2.Section = 'H';
console.log(user1.Section);
console.log(user2.Section);

