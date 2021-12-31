import { ADD_TASK, MARK_AS_COMPLETED } from "../contants/constant";
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

    case MARK_AS_COMPLETED: {
      const id = action.todoId;
      const tempList = state.todoList.map((item) => {
        if (item.id === id) {
          item.status = "Completed";
        }
        return item;
      });
      return {
        ...state,
        todoList: tempList
      };
    }

    default:
      return state;
  }
};
