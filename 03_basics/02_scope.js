//{} This curly braces are scope when it comes in fucntion if else condition 
let a = 300
if(true){
    let a= 10
    const b= 20
   
}
// console.log(a);
// console.log(b);
// console.log(c);
 
//if we consolelog a inside scope it value is 10
// but when we log it outside the scope it value is 300
// which is also global scope.
// var is avoided because its value 
// can be used outside of the scope which is problemetic
// Value declared in global scope can be used inside
// the scope inside the scope but scope value should not be used outside the scope

// function one(){
//     const username= "Ragen"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// // one()

// if(true){
//     const username = "Ragen"
//     if(username == "Ragen"){
//         const website = "Youtube"
//         console.log(username + website)
//     }
//     // console.log(website)
// }
// // console.log(username)


//**********Interesting******//
console.log(addone(5))
function addone(num){
    return num+1
}

console.log(addTwo(5))
const addTwo = function(num){
    return num+2
}

// these both two are ways of defining function.
// if we call function upside const addTwo= function 
// then it will get error