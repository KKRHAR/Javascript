// // Primitive Data types
// // 7 Types
// // String, Number, Boolean,null(null means Empty)
// //undefined,Symbol,BigInt
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// // let userEmail= undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456789902343434221434566n
// write n at last to make it bigInt

// Refrence(Non primitive)

// Array,Objects,Functions

// const heros = ["shaktiman","nagraaj","ironman"];

// let myObj={
//     name:"Ragen",
//     age:22,
// }

// const myFunction =function(){
// console.log("Helllo World");
// }

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//*****************************************/

//Stack(Primitive),Heap(Non-Primitive)

let nam = "Ragen";

let anothername= "sigma"

anothername= "R"
console.log(nam);
console.log(anothername);

let user = {
    email:"user@google.com",
    esewa:"user@byl",

}

let userTwo = user

userTwo.email = "R@gmail.com"

console.log(user.email);
console.log(userTwo.email);
// it gives the same value Heap gives us the refrence.
//While Stack gives us the copy