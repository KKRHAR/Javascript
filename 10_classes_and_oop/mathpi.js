const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")//This gives us the property of Object.
// console.log(Math.PI);
// Math.PI= 5
// console.log(Math.PI);
// console.log(descriptor);

const juice = {
    name:"mausam",
    price:500,
    isAvailable:true,

    orderJuice: function(){
        console.log("juice is not free");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(juice,'name'));

Object.defineProperty(juice,'name',{
    // writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(juice,"name"));


for (let [key, value] of Object.entries(juice)) {
  if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
  }
}