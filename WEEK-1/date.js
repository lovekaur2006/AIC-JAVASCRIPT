// ----------------------------- DATES ----------------------

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(typeof myDate);

let newDate= new Date(2024, 0, 2)
let Date1= new Date("08-03-2024")
console.log(Date1.toLocaleDateString());

let timeStamp= Date.now()
console.log(timeStamp);
console.log(Date1.getTime());
console.log(Math.round(Date.now()/1000));

let date2=new Date()
console.log(date2);
console.log(date2.getMonth()+1);

//${ date2.getDay()}

