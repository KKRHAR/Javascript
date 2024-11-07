const marvel_heroes = ["Thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)// It Merges to arrays.
// console.log(marvel_heroes[3][1])

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes) // same as push in concat also it merges two arrays.

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);// It gave us a new array combining all elements.

// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// // ... its spread 
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Ragen"))// It checks whether it is array or not
console.log(Array.from("Ragen"));// it converts any to array
console.log(Array.from({name:"RagenNepal"})) // Intersting Case.
  
// Array From converts into array 
// While of creates a new array.

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

