// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls,cryptograph,network
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// const promiseThree = new Promise(function (resolve,reject){
//     setTimeout(function(){
// resolve({username:'Ragen',email:"nepal@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
// console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error= true
// if(!error){
//     resolve({username:"ABC",password:"123"})
// }else{
//     reject('Error: Something went wrong')
// }
//     },3000)
// })

// promiseFour.then((user)=>
//     {console.log(user)
//     console.log(user);
//     return user.username
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log('The promise is either resolved or rejected')
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= true
//         if(!error){
//             resolve({username:"JavaScript",password:123})
//         }else{
//             reject("Error Something is wrong")
//     }
// },1000)
// })
// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
    
// }
// catch(error){
//     console.log(error);
// }
// }
// consumePromiseFive()
// async function getAllUser() {
// try{
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
//     }
//     catch(error){
// console.log("E:",error);
//     }
// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data)
})
.catch (function(error){
    console.log(error)

})
