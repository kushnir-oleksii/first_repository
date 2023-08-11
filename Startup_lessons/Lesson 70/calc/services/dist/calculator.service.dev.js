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
        a: {
          type: "number"
        },
        // Используем правильный формат для валидации
        b: {
          type: "number"
        },
        operator: {
          type: "string",
          pattern: "^[+\\-*/]$"
        } // Паттерн для оператора

      },
      handler: function handler(ctx) {
        var _ctx$params, a, b, operator, numA, numB, result, operation;

        return regeneratorRuntime.async(function handler$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$params = ctx.params, a = _ctx$params.a, b = _ctx$params.b, operator = _ctx$params.operator; // Преобразование параметров a и b в числа

                numA = parseFloat(a);
                numB = parseFloat(b);

                if (!(isNaN(numA) || isNaN(numB))) {
                  _context.next = 5;
                  break;
                }

                throw new Error("Параметры 'a' и 'b' должны быть числами");

              case 5:
                _context.t0 = operator;
                _context.next = _context.t0 === "+" ? 8 : _context.t0 === "-" ? 10 : _context.t0 === "*" ? 12 : _context.t0 === "/" ? 14 : 20;
                break;

              case 8:
                result = numA + numB;
                return _context.abrupt("break", 21);

              case 10:
                result = numA - numB;
                return _context.abrupt("break", 21);

              case 12:
                result = numA * numB;
                return _context.abrupt("break", 21);

              case 14:
                if (!(numB !== 0)) {
                  _context.next = 18;
                  break;
                }

                result = numA / numB;
                _context.next = 19;
                break;

              case 18:
                throw new Error("Деление на ноль невозможно");

              case 19:
                return _context.abrupt("break", 21);

              case 20:
                throw new Error("Неподдерживаемый оператор");

              case 21:
                _context.t1 = operator;
                _context.next = _context.t1 === "+" ? 24 : _context.t1 === "-" ? 26 : _context.t1 === "*" ? 28 : _context.t1 === "/" ? 30 : 32;
                break;

              case 24:
                operation = "сложения";
                return _context.abrupt("break", 32);

              case 26:
                operation = "вычитания";
                return _context.abrupt("break", 32);

              case 28:
                operation = "умножения";
                return _context.abrupt("break", 32);

              case 30:
                operation = "деления";
                return _context.abrupt("break", 32);

              case 32:
                return _context.abrupt("return", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 ".concat(operation, " ").concat(numA, " \u0438 ").concat(numB, " \u0440\u0430\u0432\u0435\u043D: ").concat(result));

              case 33:
              case "end":
                return _context.stop();
            }
          }
        });
      }
    }
  },
  events: {},
  methods: {},
  created: function created() {},
  started: function started() {
    return regeneratorRuntime.async(function started$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  stopped: function stopped() {
    return regeneratorRuntime.async(function stopped$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};