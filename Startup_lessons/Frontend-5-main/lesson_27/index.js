//Wrong code
function getValues(expression) {
  let values = [...expression];
  debugger;
  return values;
}
function count(expression) {
  let values = getValues(expression);
  switch (values[1]) {
    case "+":
      showResult(sum(values));
      break;
    case "-":
      showResult(subtract(values));
      break;
    case "*":
      showResult(multiply(values));
      break;
    case "/":
      showResult(divide(values));
      break;
  }
}
function sum(values) {
  return values[1] + values[2];
}
function subtract(values) {
  return values[1] - values[2];
}
function multiply(values) {
  return values[1] * values[2];
}
function divide(values) {
  return values[1] / values[2];
}
function showResult(value) {
  alert(value);
}

count("5-2"); //Error
//Correct code
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
//   //console.log(count(5*2));
// } catch (error) {
//   if (error.message == "expression is not iterable") {
//     alert("You write incorrect data");
//   } else {
//     alert("System error, we are doing our best to solve the problem");
//   }
// }

/*function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter

function showMovie (user){
    try{
        unknownFunction();//Non-existent function called
         if (user.age == undefined){
             throw new SyntaxError('Age not determined');
         }
         if(user.age >= 18){//undefined
             console.log('You can watch this movie');
         } else {
             console.log('Sorry, you are too young');
     }
     } catch(error){
         if(error.name == 'SyntaxError'){
             console.log(error);
         } else {
             throw error
         }
     }
}
try{
    showMovie(user)
} catch(error){
 console.log(error);
}*/

/*function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter
function showMovie (user){
    try{
        if (user.age == undefined){
            throw new SyntaxError('Age not determined');
        }
        if(user.age >= 18){//undefined
            return 'You can watch this movie';
        } else {
            return 'Sorry, you are too young';
    }
    } catch(error){
            return error.name + ': ' + error.message;
    } finally {
        console.log('Welcome to our site');
    }
}
function message(message) {
    console.log(message);//Welcome to our site
}
message(showMovie (user));//SyntaxError: Age not determined*/
