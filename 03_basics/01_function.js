// function sayMyName(){
// console.log("R")
// console.log("A")
// }
// sayMyName()


// function addTwoNumber(number1,number2){
//   console.log( number1 + number2)
// }
// addTwoNumber(4,5)

// function addTwoNumber(number1,number2){
//  let result = number1 + number2 
// // return result
// // console.log("hi") this console will not be exceuted because after return nothing will be exceuted.
// console.log(result);
// // return number1 + number2
// }
//   // const result = addTwoNumber(4,5)
//   // console.log("Result:",result);


// function loginUserMessage(username="sam"){
//   // same as !username
//   if(username === undefined ){
//     console.log("Plz enter a user name")
//     return
//   }
//   return `${username} just logged in`
// }

// // console.log(loginUserMessage("Ragen"))
// console.log(loginUserMessage())

// if username = sam then the default value is sam just logged in other wise what ever the we passed that is the value.


function calculateCartPrice(val1,val2,...num1){// ...is rest or spread operator we can call it as we used it the ... packs all the arguments 
  return num1
}
// console.log(calculateCartPrice(200,400,500,200))
 // val1 takes 200 and val2 takes 400
 // ...num1 take 500,200 and many more.

//  const user = {
//   username:"Ragen",
//   price:199
//  }

//  function handleObject(anyobject){
// console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
//  }
// // We are passing object in the function
// //  handleObject(user);
// // we can also pass object by using following technique.
// handleObject({
//   username:"ABD",
//   price:200
// })

// const myNewArray= [200,400,100,600]
// function returnSecondValue(getArray){
//   return getArray[1]
// }
// // console.log(returnSecondValue(myNewArray))

// console.log(returnSecondValue([200,20,10]))