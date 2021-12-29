import { ADD_TASK } from "../contants/constant";
export const initialState = {
  taskList: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const tempArray = [...state.taskList, action.task];
      return {
        ...state,
        taskList: tempArray,
      };
    }
    default:
      return state;
  }
};
