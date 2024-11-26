// const User = {
// username:"Ragen",
// loginCount: 8,
// signedIn:true,

// getUserDetails:function(){
//     // console.log("Got user details from database");
//     // console.log(`Username:${this.username}`)
//     // console.log(this);
// }

// } // This is Object literals.

// console.log(User.username)
// console.log(User.getUserDetails())
// console.log(this)

// const promiseOne= new Promise()
// const date= new Date()
// the new keyword is a constructor function.

function User(username,loginCount,isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;

    this.gretting = function(){
console.log(`Welcome ${this.username}`)
    }
    return this
    
// Here if we donot use return this keyword it works
// completely fine but it is good to write return this
}

const userOne = new User("Ragen",12,true)
const userTwo =  new User("Hey",11,true)

// Here We can see if we call write userTwo it overrides
// the userOne.
// So thats why we use new Keyword.

console.log(userOne.constructor);
// console.log(userTwo);

// Read about instance.
