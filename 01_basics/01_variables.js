const accountID = 144553
let accountEmail = "tanish@gmail.com"
var accountPassword = "12345"
accountCity = "Dharamshala"
let accountState;

// accountID = 2 // not allowed

accountEmail = "tan@gm.com"
accountPassword = "125"
accountCity = "Yol"

console.log(accountID);

/* 
Prefer not to use var
because of block scope and functional scope issue
*/ 


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

