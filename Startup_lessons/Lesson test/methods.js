export function countSalary(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].salary;
    }
    return console.log(sum);
  }
