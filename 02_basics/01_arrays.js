// Arrays
// Array is a data type which stores collection of multiple items under a single variable name.
const myArr = [0,1,2,3,4,5]
const myHeroes = ["Ironman","Thor"]

const myArr2 = new Array(1,2,3,4)// this is the way to declare array.
console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)// it returns section of array
console.log(myn1)
console.log("b",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

// splice manipulate original array