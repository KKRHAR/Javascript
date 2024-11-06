// Dates

let myDate = new Date()
// console.log(myDate.toString());
// // Wed Nov 06 2024 12:38:40 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());
// // 11/6/2024, 12:38:40 PM
// console.log(myDate.toDateString());
// // Wed Nov 06 2024
// console.log(myDate.toISOString());
// // 2024-11-06T12:38:40.419Z
// console.log(myDate.toJSON());
// // 2024-11-06T12:38:40.419Z
// console.log(myDate.toLocaleDateString());
// // 11/6/2024

console.log(typeof myDate);
// Date is an Object

// let myCreatedDate = new Date (2024,0,23)
// Declaring Date
// let myCreatedDate = new Date(2024,0,23,5,3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2023")

// 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// // This gives you Millisecond.
// console.log(myCreatedDate.getTime());
// used in comparing time in milli Second
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long",

})

// it gives us the date value which we want to see