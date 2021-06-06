import * as actionType from '../actionTypes/actionType';
const initialState = {
  counter: 9,
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADDITION:
      return {
        ...state,
        counter: action.value,
      };
    case actionType.SUBTRACTION:
      return {
        ...state,
        counter: action.value,
      };
    case actionType.MULTIPLICATION:
      return {
        ...state,
        counter: action.value,
      };
    case actionType.DIVISION:
      return {
        ...state,
        counter: action.value,
      };
    case actionType.RESET:
      return {
        ...state,
        counter: action.value,
      };
    default:
      return state;
  }
};

