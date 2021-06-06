import * as actionType from '../actionTypes/actionType';

export const addition = (newValue) => ({
  type: actionType.ADDITION,
  value: newValue,
});
export const subtraction = (newValue) => ({
  type: actionType.SUBTRACTION,
  value: newValue,
});

export const multiplication = (newValue) => ({
  type: actionType.MULTIPLICATION,
  value: newValue,
});

export const division = (newValue) => ({
  type: actionType.DIVISION,
  value: newValue,
});

export const reset = (newValue) => ({
  type: actionType.RESET,
  value: newValue,
});
