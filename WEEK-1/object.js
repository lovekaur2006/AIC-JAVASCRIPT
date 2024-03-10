//OBJECTS ---------> key:value pair

// Ways to create javascript objects
//1. Using an Object literal
const person = {
    firstName: "lovepreet",
    lastName: "Kaur",
    age: 18
};
// adding new properties
person.nationality = "Indian";
console.log(person);

//-----
person.greeting = function () {
    console.log("Hello JS user");
}
person.greeting2 = function () {
    console.log(`Helo JS user, ${this.firstName}`);
}
console.log(person.greeting());
console.log(person.greeting2());

//------
const people = {};
people.section = "G";
people.rollNo = 11232713;
console.log(people);

// accessing the property of obj
console.log(people.rollNo);
console.log(people["section"]);

//2. Using new keyword
const fruits = new Object();
fruits.fruit1 = "apple";
fruits.fruit2 = "grapes";
fruits.fruit3 = "orange";

//deleting property from an object
delete fruits.fruit3;
//delete fruits["fruit3"];
console.log(fruits);

//Looping through the properties of an object
let txt = "";
for (let x in fruits) {
    txt = txt + fruits[x] + " ";
}
console.log(txt);

//nested objects
const MyObj = {
    vehicles: 2,
    bike: "Yamaha",
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Audi"
    }
}

// de-structure object
const {bike:b}=MyObj
// console.log(bike);
console.log(b);

//accessing nested objects
console.log(MyObj.cars.car2);
console.log(MyObj.cars["car1"]);
console.log(MyObj["cars"]["car3"]);

//--------
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }
// const obj4 = { obj1, obj2 }
// const obj4=Object.assign({}, obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2 }
console.log(obj4);

//JSON API
// {
//     "color":"red",
//     "width":75,
//     "height":67
// }

//OR

[
    {},
    {},
    {}
]