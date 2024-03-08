const myArr = [0, 1, 2, 3, 4]

const myArr2 = new Array(7, 8, 9, 10)
console.log(myArr2[3]);

// ARRAY METHODS

myArr.push(5);
myArr.pop();
myArr.unshift(6)
myArr.shift();
console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);    // String

const arr3 = myArr.slice(1, 3)
console.log(arr3);

const arr4 = myArr.splice(1, 3)
console.log(myArr);
console.log(arr4);