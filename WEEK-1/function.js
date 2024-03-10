function MyFunc() {
    console.log("L");
    console.log("O");
    console.log("V");
    console.log("E");
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
}
MyFunc()

//-------------------------

function addTwoNum(num1, num2) {
    let result = (num1 + num2);
    return result
}
const result = addTwoNum(6, 7)
console.log("Result: ", result);

//---------------------------

function loginUserMsg(username = "Ram") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("lovepreet"));

//-------------------------------

function calc(val1, val2, ...num1) {
    return num1
}
console.log(calc(200, 400, 500, 2000));

//-------------------------------

const user = {
    username: "Ritika",
    price: 199
}
function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObj(user)

//---------------------------------

const myNewArr = [200, 400, 100, 600]
function returnSecondVal(getArray) {
    return getArray[1]
}
// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([200, 400, 500, 1000]));