"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  coffee: 0,
  sugar: 0,
  isLoggedIn: false
};

var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'setCoffee':
      return _objectSpread({}, state, {
        coffee: action.value
      });

    case 'setSugar':
      return _objectSpread({}, state, {
        sugar: action.value
      });

    case 'incrementCoffee':
      return _objectSpread({}, state, {
        coffee: state.coffee + 1
      });

    case 'decrementCoffee':
      return _objectSpread({}, state, {
        coffee: state.coffee - 1
      });

    case 'increaseCoffee':
      return _objectSpread({}, state, {
        coffee: state.coffee + action.number
      });

    case 'incrementSugar':
      return _objectSpread({}, state, {
        sugar: state.sugar + 1
      });

    case 'decrementSugar':
      return _objectSpread({}, state, {
        sugar: state.sugar - 1
      });

    case 'increaseSugar':
      return _objectSpread({}, state, {
        sugar: state.sugar + action.number
      });

    case 'logIn':
      return _objectSpread({}, state, {
        isLoggedIn: true
      });

    case 'logout':
      return _objectSpread({}, state, {
        isLoggedIn: false
      });

    case 'clearData':
      return _objectSpread({}, state, {
        coffee: 0,
        sugar: 0
      });

    default:
      return state;
  }
};

var store = (0, _redux.legacy_createStore)(counterReducer);
var _default = store;
exports["default"] = _default;