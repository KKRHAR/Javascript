// Immediately Invoked Function Expression (IIFE)

(function tea(){
    // this is named iife because it has name tea
    console.log(`DB CONNECTED`);
})();// this is the way to declare IIFE with ()()

((name) =>{
    //this is unnamed iife as you can see.<<
    console.log(`DB CONNECTED TO ${name}`);
})('Ragen')