function count(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }

  let values = getValues(expression);
  switch (values[1]) {
    case "+":
      return showResult(sum(values));

    case "-":
      return showResult(subtract(values));

    case "*":
      return showResult(multiply(values));

    case "/":
      try {
        return showResult(divide(values));
      } catch (error) {
        console.error(`count('${expression}')`);
        console.error(error.name + ': ' + error.message);
        showResult(0);
        return 0;
      }
  }
}

function showResult(value) {
  console.log(value);
  return value;
}

function subtract(values) {
  return values[0] - values[2];
}

function sum(values) {
  return +values[0] + +values[2];
}

function multiply(values) {
  return values[0] * values[2];
}

function divide(values) {
  if (values[2] === '0') {
    throw new Error("Can't divide by 0");
  }
  return values[0] / values[2];
}

count('5/0');


// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     debugger;
//     return values;
//   }
//   let values = getValues(expression);
//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(value) {
//     return value;
//   }
// }
// function sum(values) {
//   return +values[0] + +values[2];
// }
// function subtract(values) {
//   return +values[0] - +values[2];
// }
// function multiply(values) {
//   return +values[0] * +values[2];
// }
// function divide(values) {
//   return +values[0] / +values[2];
// }

// try {
//   console.log(count(5*2));
// } catch (error) {
//   if (error.message == "expression is not iterable") {
//     alert("You write incorrect data");
//   } else {
//     alert("System error, we are doing our best to solve the problem");
//   }
// }

// function count(expression) {
//     function getValues(expression) {
//       let values = [...expression];
//     //   debugger;
//       return values;
//     }
    
//       let values = getValues(expression);
//       switch (values[1]) {
//         case "+":
//          return showResult(sum(values));
          
//         case "-":
//         return  showResult(subtract(values));
          
//         case "*":
//         return  showResult(multiply(values));
          
//         case "/":
//             try {
//                 return showResult(divide(values));
//               } catch (error) {
//                 console.log(count.name +  " ('" + values[0] + '/' + values[2] + "')" + '\n' + error.name + ': ' +  error.message);
//                 console.log(0);
//               }
//             // return  showResult(divide(values));
          
//       }
//       function showResult(value){
//         alert(value)
//       }
//     }
   
//     function subtract(values) {
//       return values[0] - values[2];
//     }
//     function sum(values) {
//         return +values[0] + +values[2];// якщо ставити просто +, не перевіряючи що це числа, то буде прийматися як string і просто два числа в строку запише: 52
//       }
//     function multiply(values) {
//       return values[0] * values[2];
//     }
//     function divide(values) {
//         if (values[2] == 0) {
//           throw new Error("Can't divide by 0");
//         }
//         return values[0] / values[2];
//       }
    
      
//         count('5/0');
        




        


        