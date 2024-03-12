function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(300, 600, 800, 400));
//---------------------------------------------------
// const MyObj = {
//     name: "lovepreet",
//     price: 200
// }
function handleObj(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObj(MyObj);

handleObj({
    name: 'lovepreet',
    price: 200
})

//-------------------------------------------------------
const myNewArr = [100, 200, 300, 400, 500]
function returnSecVal(getArray) {
    return getArray[1];
}
// console.log(returnSecVal(myNewArr));
console.log(returnSecVal([100, 200, 300, 400, 500]));
