// // reduce function.
// const myNums = [1,2,3]


// // const myTotal = myNums.reduce(function (acc,currval){
// //     console.log(`acc:${acc} and currval:${currval}`);
// //      return acc + currval
// // }

// // ,0) // this 0 is accumulator first value.

// const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName:"js course",
        price:2999,
    },
    {
        itemName:"py course",
        price:999,
    },  {
        itemName:"mobile dv course",
        price:5999,
    },
    {
        itemName:"Data science course",
        price:12999,
    },
]

const priceTopay=shoppingCart.reduce((acc,item)=>acc +item.price, 0)
console.log(priceTopay);

