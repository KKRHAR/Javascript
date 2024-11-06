const name= "Ragen";
const repoCount = 50

// console.log(name+ repoCount+ "Value");
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// this concating style ${} is called string interpolation.
const gameName = new String("G-Ta-6")
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0,2);
// console.log(newString)

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newStringOne = " Ragen "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google%com"

// console.log(url.replace('%','.'))

// console.log(url.includes('google'));

console.log(gameName.split('-'))
