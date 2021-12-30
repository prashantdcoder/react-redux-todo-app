import { ADD_TASK } from "../contants/constant";
import { TodoModel } from "../../models/TodoModel";

export const initialState = {
  todoList: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const len = state.todoList.length;
      const todoModel = new TodoModel(len, action.task);
      const tempArray = [...state.todoList, todoModel];
      return {
        ...state,
        todoList: tempArray,
      };
    }
    default:
      return state;
  }
};
