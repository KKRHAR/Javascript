const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNumers.map((num)=> num+10)



// Rember in the map if we open our scope we have to write return 
//just like in filter method.

const newNums = myNumers
.map((num)=>num *10)
.map((num)=>num +1)
// this map under map is called chaining we can also 
//write filter her
.filter((num)=>num>=40)
console.log(newNums);