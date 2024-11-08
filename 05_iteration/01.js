for (let i = 0; i<10; i++){
    const element = i;

    if(element == 5){
       // console.log("5 is best number")
    }
    //console.log(element);
}

for(let i=0; i<=10; i++){
//     console.log(`Outer loop value:${i}`);
//     for(let j = 0; j<10; j++){
// console.log(`Inner Loop value:${j} and inner  ${i}`)
// console.log(i +'*'+j +'='+i*j)
    }
// }

// let myArray = ["flash","batman","ironman","superman"]

// for(let i=0; i<myArray.length;i++){
//     const element = myArray[i];
//     console.log(element);
// }


// break and continue

// for(let i=1; i<=20; i++){
//     if(i==5){
//         console.log(`Detected${i}`);
//         break; // we are thrown out completely outside the loop and nothing is executed.
//     }
//     console.log(`value of i is${i}`);
// }

for(let i=1; i<=20; i++){
    if(i==5){
        console.log(`Detected${i}`);
        continue; // but in continue detected once and our 
                   //value is printed.
            }
    console.log(`value of i is${i}`)
        };