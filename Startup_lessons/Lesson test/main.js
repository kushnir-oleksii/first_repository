import { employees } from "./employees";
import { countSalary } from "./methods";
console.log(countSalary(employees));

// function validateEmail(email) {
   
//     let checkCharacters = email.split("");
//     let atIndex = checkCharacters.indexOf("@");
//     if (atIndex == -1 || atIndex == 0 || atIndex == checkCharacters.length - 1) {
//       return false;
//     }
//     let dotIndex = checkCharacters.indexOf(".", atIndex);
//     if (dotIndex == - 1 || dotIndex == atIndex - 1 || dotIndex == checkCharacters.length + 1) {
//       return false;
//     }
//    return true
  
//   }
//   console.log(validateEmail("emalgma.@ilco.m"))

// function validateEmail(email) {
//     const atIndex = email.indexOf('@');
//     const dotIndex = email.lastIndexOf('.');
//     if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex >= email.length - 2 || email[atIndex-1] === '.' || email[atIndex+1] === '.') {
//       return false;
//     }
//     return true;
//   }
//   console.log(validateEmail("emalgma.@il.com"))//false
//   console.log(validateEmail("emalgma@ilcom"))//false
//   console.log(validateEmail("emalgma@il.com"))//true

// function validateEmail(email) {
//     if (email.length < 5) {
//       return false;
//     }
//     let atCount = 0;
//     for (let i = 0; i < email.length; i++) {
//       if (email[i] === "@") {
//         atCount++;
//       }
//       if (atCount > 1) {
//         return false;
//       }
//     }
//     return atCount === 1;
//   }

//   console.log(validateEmail("ema@lg.ma@il.com"))

// function task1 (number) {
//   if (+number === 5){
//     return true
//   }
// }
// console.log(task1(10/2))


//  const employees = [
//   {name: 'Mike', department: 'frontend', salary: 2100},
//   {name: 'Bob', department: 'backend', salary: 1700},
//   {name: 'Nikola', department: 'frontend', salary: 1900},
//   {name: 'Alex', department: 'design', salary: 1500},
//   {name: 'Anna', department: 'sales', salary: 1800},
//   {name: 'Maria', department: 'design', salary: 1700},
//   {name: 'Jack', department: 'sales', salary: 1300},
//   {name: 'Oliver', department: 'frontend', salary: 1500},
//   {name: 'Harry', department: 'sales', salary: 1800},
//   {name: 'Jacob', department: 'sales', salary: 1200},
// ]

// function countDepartments(employees) {
//   const departments = new Set();
//   for (let i = 0; i < employees.length; i++) {
//     departments.add(employees[i].department);
//   }
//   return departments.size;
// }

// function countSalary(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].salary;
//   }
//   return sum;
// }

// function salaryDepartment(employees) {
//   return employees.reduce((result, current) => {
//     if (!result[current.department]) {
//       result[current.department] = 0;
//     }
//     result[current.department] += current.salary;
//     return result;
//   }, {});
// }

// console.log(countSalary(employees));
// console.log(countDepartments(employees));//4
// console.log(salaryDepartment(employees));


// function countSalary(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].salary;
//   }
//   return sum;
// }

// const employees = [
//   {name: 'Mik', department: 'fr', salary: 2100},
//   {name: 'Bo', department: 'ba', salary: 1700},
//   {name: 'Niko', department: 'fr', salary: 1900},
//   {name: 'Al', department: 'de', salary: 1500}
// ];

// function countDepartments(employees) {
//   const departments = new Set();
//   for (let i = 0; i < employees.length; i++) {
//     departments.add(employees[i].department);
//   }
//   return departments.size;
// }

// function salaryDepartment(employees) {
//   return employees.reduce((result, current) => {
//     if (!result[current.department]) {
//       result[current.department] = 0;
//     }
//     result[current.department] += current.salary;
//     return result;
//   }, {});
// }

// console.log(countSalary(employees));
// console.log(countDepartments(employees));//3
// console.log(salaryDepartment(employees));