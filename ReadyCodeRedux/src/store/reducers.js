import { ADDITION, DIVISION, MULTIPLICATION, SUBTRACTION } from './actionTypes'

const initialState = {
  counter: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case SUBTRACTION:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case MULTIPLICATION:
      return {
        ...state,
        counter: state.counter * 10,
      };
    case DIVISION:
      return {
        ...state,
        counter: state.counter / 2,
      };
    default:
      return state;
  }
};
