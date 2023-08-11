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
       a: { type: "number" }, // Используем правильный формат для валидации
       b: { type: "number" },
       operator: { type: "string", pattern: "^[+\\-*/]$"} // Паттерн для оператора
     },
     async handler(ctx) {
        const { a, b, operator } = ctx.params;
      
        // Преобразование параметров a и b в числа
        const numA = parseFloat(a);
        const numB = parseFloat(b);
      
        if (isNaN(numA) || isNaN(numB)) {
          throw new Error("Параметры 'a' и 'b' должны быть числами");
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
              throw new Error("Деление на ноль невозможно");
            }
            break;
          default:
            throw new Error("Неподдерживаемый оператор");
        }
      
        let operation;
        switch (operator) {
          case "+":
            operation = "сложения";
            break;
          case "-":
            operation = "вычитания";
            break;
          case "*":
            operation = "умножения";
            break;
          case "/":
            operation = "деления";
            break;
        }
      
        return `Результат ${operation} ${numA} и ${numB} равен: ${result}`;
      }
      
     
   }
 },
 events: {},
 methods: {},
 created() {},
 async started() {},
 async stopped() {}
};
