const userEmail = "abc@gmail.com"

// if(userEmail){// here in this condition we are assuming the value will be correct.
//     console.log("got user Email");
// }
// else{
//     console.log("dont have user Email");
// }
// Here are some truthy value and falsy value.

// falsy value
// false, 0, -0, BigInt 0n, "", undefined , null , NaN

//truthy value
// "0"(If we have 0 inside "" then it is truthy value)
//'false'(this is also truthy because it is written in string)
// {} function(){}

const emptyObj = {}
//checking wether object is empty or not.
if (Object.keys(emptyObj).length === 0){// when we compare in this way we get arrays so we are checking its length.{
console.log("Object is empty")
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// Here we can see it doesnot give me null but 10 so it takes safety 
// previously 5 was output.
// val1 = undefined ?? 15
// it is used for null and undefined.
console.log(val1)


// Terniary Operator

// conditon ? true: false

const iceTeaPrice =100;

iceTeaPrice >=80 ? console.log("less than 80") : console.log("More than 100")
