// {}--> is scope in function, or if else
// let---> local scope
// var---> gloval scope
let a = 60;
if (true) {
    let a = 10;
    console.log("Inner: ", a);
}
console.log(a);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
// In looops also, i needed to be declared
// in the local scope using the let keyword