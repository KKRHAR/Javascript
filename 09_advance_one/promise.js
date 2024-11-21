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

const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function(){
resolve({username:'Ragen',email:"nepal@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
let error= true
if(!error){
    resolve({username:"ABC",password:"123"})
}else{
    reject('Error: Something went wrong')
}
    },3000)
})

promiseFour.then((user)=>{console.log(user)
    console.log(user);
    return user.username
});


// .catch()
