import { ADD_COUNTER, REDUCE_COUNTER } from "./actionType";
export const initState = {
  count: 0
};

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        count: state.count + payload
      };

    case REDUCE_COUNTER:
      return {
        ...state,
        count: state.count - payload
      };
    default:
      return state;
  }
};
