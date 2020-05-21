import { ADD_COUNTER, REDUCE_COUNTER } from "./actionType";

export const addCounter = payload => ({
  type: ADD_COUNTER,
  payload
});

export const reduceCounter = payload => ({
  type: REDUCE_COUNTER,
  payload
});
