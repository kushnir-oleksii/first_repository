
export function countSalary(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].salary;
    }
    return sum;
  }

export function departmentsQuantity(employees) {
  const departments = new Set();
  for (let i = 0; i < employees.length; i++) {
    departments.add(employees[i].department);
  }
  return departments.size;
}

export function salaryDepartment(employees) {
  return employees.reduce((result, current) => {
    if (!result[current.department]) {
      result[current.department] = 0;
    }
    result[current.department] += current.salary;
    return result;
  }, {});
}
export function departmentsSalary(employees) {
  return employees.reduce((result, current) => {
    if (!result[current.department]) {
      result[current.department] = 0;
    }
    result[current.department] += current.salary;
    return result;
  }, {});
}