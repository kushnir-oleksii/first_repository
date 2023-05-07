function count(expression) {
    function getValues(expression) {
      let values = [...expression];
      debugger;
      return values;
    }
    
      let values = getValues(expression);
      switch (values[1]) {
        case "+":
         return showResult(sum(values));
          
        case "-":
        return  showResult(subtract(values));
          
        case "*":
        return  showResult(multiply(values));
          
        case "/":
        return  showResult(divide(values));
          
      }
      function showResult(value){
        alert(value)
      }
    }
   
    function subtract(values) {
      return values[0] - values[2];
    }
    function sum(values) {
        return +values[0] + +values[2];// якщо ставити просто +, не перевіряючи що це числа, то буде прийматися як string і просто два числа в строку запише: 52
      }
    function multiply(values) {
      return values[0] * values[2];
    }
    function divide(values) {
      return values[0] / values[2];
    }
        
    count('5+2'); 