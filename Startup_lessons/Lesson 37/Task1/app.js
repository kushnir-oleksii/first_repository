import  employees  from "./employees.js";
import { countSalary, departmentsQuantity, departmentsSalary } from "./methods.js";

console.log(countSalary(employees));//16500
console.log(departmentsQuantity(employees));//4
console.log(departmentsSalary(employees));//{frontend: 5500, backend: 1700, design: 3200, sales: 6100}


