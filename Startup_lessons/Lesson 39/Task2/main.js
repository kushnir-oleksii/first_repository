

let salaries = {
    "Mike": 1500,
    "Bob": 1800,
    "Nikola": 1700
  }

function maxSalary(salaries) {
    let salary = 0;
    let employeeName = '';
    for (const [employee, quantityOfSalary] of Object.entries(salaries)) {
      if (quantityOfSalary > salary) {
        salary = quantityOfSalary;
        employeeName = employee
      }
    }
    return employeeName;
  }
  
 
  
  console.log(maxSalary(salaries)); // Bob