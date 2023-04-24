let employees = {    
    pay (month, sum){
        this.wallet[month] = sum;
    },
    
   
}

let frontendDeveloper = {
    name: 'Mike' ,
    wallet : {},//необхідно було вивести властивість wallet для кожного працівника, щоб заробітня плата зберігалася окремо
}
Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
    name: 'Bob',
    wallet : {},
}

Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay('june', 1500);
backendDeveloper.pay('may', 3500);
frontendDeveloper.pay('june', 2500);
frontendDeveloper.pay('march', 4500);

console.log(backendDeveloper.wallet.june);//1500
console.log(backendDeveloper.wallet.may);//3500
console.log(frontendDeveloper.wallet.june);//2500
console.log(frontendDeveloper.wallet.march);//4500



// Код який треба виправити, щоб кожному працівнику зарплатня начислювалася окремо
// let employees = {
//     wallet: {},
//     pay(month, sum) {
//       this.wallet[month] = sum;
//     }
   
//   };
  
//   let frontendDeveloper = {
//     name: 'Mike',
//   };
  
//   Object.setPrototypeOf(frontendDeveloper, employees);
  
//   let backendDeveloper = {
//     name: 'Bob',
//   };
  
//   Object.setPrototypeOf(backendDeveloper, employees);
  
//   backendDeveloper.pay('june', 1500);
  
//   console.log(backendDeveloper.wallet.june); 
//   console.log(frontendDeveloper.wallet.june);