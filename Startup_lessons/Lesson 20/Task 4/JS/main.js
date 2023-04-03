let salaryFirstMonth = prompt("Enter first month salary", '1');
let salarySecondMonth = prompt("Enter second month salary", '2');
let sumForTwoMonth = Number(salaryFirstMonth) + Number(salarySecondMonth);
let sumForTwoMonthBonus = Number(sumForTwoMonth) + 1;
alert(`Your salary for 2 month is: ${sumForTwoMonth}`)
alert(`You have extra bonus! Your total salary was: ${sumForTwoMonth}$ it's increased for 1$ and now it is: ${sumForTwoMonthBonus}$`);
alert( (2000 > sumForTwoMonthBonus) && "I'm out" || (2000 <= sumForTwoMonthBonus) && "I'm ready to work") ;