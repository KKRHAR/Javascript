// Higher order Array Loops.

// for of 
//["","",""]

//[{}{}{}] // array of object

const arr = [1,2,3,4,5]

// we are going to discuss special loops for arrays.

// for(const iterator of object){

// }
// it is just a declaration

// for(const num of arr){

// console.log(num);
// }

// const greetings ="Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map()

map.set('IN',"India")
map.set('USA',"USAA")

console.log(map);
// // it output we can see Map gives us the unique value.
// { 'IN' => 'India', 'USA' => 'USAA' }

for(const [key,value] of map ){
    console.log(key,':-',value);
}
// it output for(const key of map ) gives arrays
//[ 'IN', 'India' ]
// [ 'USA', 'USAA' ]

//for(const [key,value] of map)   console.log(key,':-',value);
// if we write key and value the it gives us separate key and value
// Output
//IN :- India
// USA :- USAA

// const myObject = {
//     'game1':'NFS',
//     'game2':'SpiderMan'
// }

// for(const [key,value] of myObject){
// console.log(Key,':', value);
// }  this will not work because map is iterable but not object.