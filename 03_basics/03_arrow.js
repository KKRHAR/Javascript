// const user ={
//     username:"Ragen",
//     price:999,
//  // this refers to current context.   
//     welcomeMessage: function(){
//         console.log(`${this.username},Welcome to website`)
//     console.log(this)
//     }
// }

// user.welcomeMessage()
// // This gives me the user object value 
// // But what if some one change it here then see what happens.
// user.username= "sam"
// user.welcomeMessage()
// console.log(this)

// function tea(){
//     let username= "Ragen"
// console.log(this.username)
// }
// tea();
// we are not able to use this in a function.
// That why we donot use this in arrow function 
// const tea = () => {

// }

// basic way to define arrow function is  ()=>{}

//    const addTwo = (num1,num2) =>{
//     return num1+num2
//    } 

//    const addTwo = (num1,num2) => num1+num2
//    console.log(addTwo(3,4)) // it runs the same way

//    const addTwo = (num1,num2) => (num1+num2)
   const addTwo = (num1,num2) => ({username:"Ragen"})

   console.log(addTwo())
// If we are using object then we must give the parenthesis like this({here is the object})

//    console.log(addTwo(3,4))

// In explicit we write return keyword but in implicite 
// we donot use write return keyword.
   

