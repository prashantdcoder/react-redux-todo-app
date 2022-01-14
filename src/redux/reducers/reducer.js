import {
    ADD_TASK
} from "../contants/constant";

export const initialState = {
  success: '',
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
