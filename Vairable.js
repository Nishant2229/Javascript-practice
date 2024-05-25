const accountId = 125656
let accountEmail = "nishant342@gmail.com"
var accountCity = "Panna"

// accountId = 6 // not allowed

accountEmail = "nishant11@gmail.com"
accountCity = "chhatrpur"

console.log(accountId);
console.table([accountId, accountCity, accountEmail])

/* not to use var vecause the issue of block scope and functional scope
 let - it has block scope we cannot access it out of the scope and it redeclare only on the scope
 const - it has block scope and we cannot redeclare the variable 
*/
