function count(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }

  let values;
  try {
    if (typeof expression !== 'string') {
      throw new Error('Please write in string');
    }
    values = getValues(expression);
  } catch (error) {
    if (error.message === 'expression is not iterable') {
      console.error(error.name + ': ' + error.message);
      values = [0, '+', 0];
    } else {
      throw error;
    }
  }

  switch (values[1]) {
    case '+':
      return showResult(sum(values));
    case '-':
      return showResult(subtract(values));
    case '*':
      return showResult(multiply(values));
    case '/':
      return showResult(divide(values));
  }
}

function showResult(value) {
  return value;
}

function sum(values) {
  return +values[0] + +values[2];
}

function subtract(values) {
  return +values[0] - +values[2];
}

function multiply(values) {
  return +values[0] * +values[2];
}

function divide(values) {
  return +values[0] / +values[2];
}

try {
  console.log(count(5/2));
} catch (error) {
  console.error(error);
}


// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     return values;
//   }
//   let values;
//    try {
//     values = Values(expression);//line1
//    } catch(error)
//    {
//    console.log(error.name + ': ' + error.message)
//    values = [0, '+', 0]
//    }
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
// console.log(count(5*2));//line2

// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     return values;
//   }
//   let values;
//   try {
//     if (typeof expression !== 'string') {
//       throw new Error('Необходимо писать в string формате');
//     }
//     values = getValues(expression);
//   } catch(error) {
//     console.log(error.name + ': ' + error.message);
//     values = [0, '+', 0];
//   }
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
// console.log(count('5/2')); //line2


// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     return values;
//   }
//   let values;
//   // try {
//   //   if (typeof expression !== 'string') {
//   //     throw new Error('Необходимо писать в string формате');
//   //   }
//   //   values = getValues(expression);
//   // } catch(error) {
//   //   console.log(error.name + ': ' + error.message);
//   //   values = [0, '+', 0];
//   // }
//   try {
//     let data = Values(expression);
//     data = values;
//   }
//   catch(error) {
//     if (error.message == "expression is not iterable") {
//       console.log (error.name + ': ' + error.message);
//       values = [0, "+", 0];
//       }
//       else {
//         throw error;
//       }
//   }
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
// try {console.log(count('5/2'));

// }
// catch (error){
//   console.log(error);
// }
 //line2




// function count(expression) {
//   function getValues(expression) {
//     if (typeof expression !== 'string') {
//       throw new Error('Please write in string');
//     }
//     let values = [...expression];
//     return values;
//   }

//   let values;
//   try {
//     values = getValues(expression); // line1
//   } catch (error) {
//     console.error(error.name + ': ' + error.message);
//     values = [0, '+', 0];
//   }

//   switch (values[1]) {
//     case '+':
//       return showResult(sum(values));
//     case '-':
//       return showResult(subtract(values));
//     case '*':
//       return showResult(multiply(values));
//     case '/':
//       return showResult(divide(values));
//   }
// }

// function showResult(value) {
//   return value;
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

// console.log(count(5 * 2)); // line2


