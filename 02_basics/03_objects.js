// singleton 
// Object.create{}

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Ragen",
    "Full Name":"Ragen Nepal",
    age:23,
    [mySym]:"myKey1",//this is the correct way to declare symbol.
    location:"Butwal",
    email:"nepalragen@gmail.com",
    isLoggedIn:false,
    lastLogIinDays:["Monday","Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser."Full Name") //  It is incorrect In this case we have to use square Notation to get the value
// console.log(JsUser["Full Name"])// this way we can access the full name 
// console.log(JsUser[mySym]) // symbol is accessed in this way otherwise it's value type is string we cannot use it as symbol so thats why it is accessed this way to get it as a symbol but its value is same only datatype is different.

JsUser.email = "123@gmail.com"// changing the value of object.
// Object.freeze(JsUser)// It freezes the object which means we cannot change the object now 

JsUser.email = "545@gmail.com"// This value is not changed because we freezed the object.
// console.log(JsUser);

//Output
// 'Full Name': 'Ragen Nepal',
// age: 23,
// location: 'Butwal',
// email: '123@gmail.com',
// isLoggedIn: false,
// lastLogIinDays: [ 'Monday', 'Saturday' ],
// [Symbol(key1)]: 'myKey1'// it is used as a symbol and as a string 
// }


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());