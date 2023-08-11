"use strict";

/**
* @typedef {import('moleculer').Context} Context Moleculer's Context
*/
module.exports = {
 name: "calculator",
 settings: {},
 dependencies: [],
 actions: {
   calculate: {
     rest: "/calculate",
     params: {
       a: { type: "string" }, // Используем правильный формат для валидации
       b: { type: "string" },
       operator: { type: "string", pattern: "^[+\\-*/]$"} // Паттерн для оператора
     },
     async handler(ctx) {
        const { a, b, operator } = ctx.params;
      
        // Преобразование параметров a и b в числа
        const numA = parseFloat(a);
        const numB = parseFloat(b);
      
        if (isNaN(numA) || isNaN(numB)) {
          throw new Error("Параметри 'a' та 'b' повинні бути числами");
        }
      
        let result;
      
        switch (operator) {
          case "+":
            result = numA + numB;
            break;
          case "-":
            result = numA - numB;
            break;
          case "*":
            result = numA * numB;
            break;
          case "/":
            if (numB !== 0) {
              result = numA / numB;
            } else {
              throw new Error("Ділити на нуль не можна");
            }
            break;
          default:
            throw new Error("Такий оператор не використовується");
        }
      
        let operation;
        switch (operator) {
          case "+":
            operation = "додавання";
            break;
          case "-":
            operation = "віднімання";
            break;
          case "*":
            operation = "множення";
            break;
          case "/":
            operation = "ділення";
            break;
        }
      
        return `Результат ${operation} ${numA} та ${numB} дорівнює: ${result}`;
      }
      
     
   }
 },
 events: {},
 methods: {},
 created() {},
 async started() {},
 async stopped() {}
};
