import { legacy_createStore } from 'redux';

const initialState = {
  coffee: 0,
  sugar: 0,
  isLoggedIn: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setCoffee':
      return {
        ...state,
        coffee: action.value,
      };
    case 'setSugar':
      return {
        ...state,
        sugar: action.value,
      };
    case 'incrementCoffee':
      return {
        ...state,
        coffee: state.coffee + 1,
      };
    case 'decrementCoffee':
      return {
        ...state,
        coffee: state.coffee - 1,
      };
    case 'increaseCoffee':
      return {
        ...state,
        coffee: state.coffee + action.number,
      };
    case 'incrementSugar':
      return {
        ...state,
        sugar: state.sugar + 1,
      };
    case 'decrementSugar':
      return {
        ...state,
        sugar: state.sugar - 1,
      };
    case 'increaseSugar':
      return {
        ...state,
        sugar: state.sugar + action.number,
      };
    case 'logIn':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'clearData':
      return {
        ...state,
        coffee: 0,
        sugar: 0,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(counterReducer);

export default store;
