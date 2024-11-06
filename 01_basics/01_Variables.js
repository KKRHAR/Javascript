const accountId = 144553
let accountEmail = "ragen@gmail.com"
var accountPassword = "12345"
accountCity = "Butwal"
let accountState;

// accountId = 2 not allowed

accountEmail = "rn.com"
accountPassword= "234"
accountCity = "Ktm"
console.log(accountId);

/* Prefer not to use var
because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail, accountPassword,accountCity,accountState])