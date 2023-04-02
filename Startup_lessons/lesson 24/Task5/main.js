
let users = [
    {id: 1, age: 17},
    {id: 2, age: 18},
    {id: 3, age: 19},
    {id: 4, age: 21},
    {id: 5, age: 17},
    {id: 6, age: 20},
    {id: 7, age: 25},
]

let result = users.filter(function(users){
    if (users.age > 18 && users.age < 21)
                return true;
                
}) 
console.log(result);
// console.log(users.filter(users => users.age > 18 && users.age < 21));

// let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// let result = numbers.filter(function(elem) {
// 	if (elem >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(result);

// let players = [{login: 'MK_18', rating: 25}, {login: 'NRG', rating: 32}, {login: 'ToM', rating: 14},];

// console.log(players.filter(plaer => plaer.rating > 20));// [{login: 'MK_18', rating: 25}, {login: 'NRG', rating: 32}]
// console.log(players.filter(plaer => plaer.rating < 20));// [{login: 'ToM', rating: 14}]
// console.log(players.filter(plaer => plaer.rating == 3))