import { TodoModel } from "../../models/TodoModel";
import { StatusType } from "../../utils/appUtils";
import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  MARK_AS_COMPLETED,
  SEARCH_TASK,
  SORT_ASC,
  SORT_DSC,
} from "../contants/constant";

export const initialState = {
  todoList: [],
  filteredTodoList: [],
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
        filteredTodoList: tempArray,
      };
    }

    case MARK_AS_COMPLETED: {
      const id = action.todoId;
      const tempList = state.todoList.map((item) => {
        if (item.id === id) {
          item.status = StatusType.COMPLETED;
        }
        return item;
      });
      return {
        ...state,
        todoList: tempList,
        filteredTodoList: tempList,
      };
    }

    case DELETE_TASK: {
      const tempList = state.todoList.filter(
        (item) => item.id !== action.todoId
      );
      return {
        ...state,
        todoList: tempList,
        filteredTodoList: tempList,
      };
    }

    case SEARCH_TASK: {
      const searchedTodoList = state.todoList.filter(
        (item) => item.title.includes(action.task) === true
      );
      console.log("searchedTodoList", searchedTodoList);
      return {
        ...state,
        filteredTodoList: searchedTodoList,
      };
    }

    case SORT_ASC: {
      const sortByAscFilteredList = state.todoList.sort((a, b) => {
        return a.title < b.title ? -1 : 1;
      });
      return {
        ...state,
        filteredTodoList: sortByAscFilteredList,
      };
    }

    case SORT_DSC: {
      const sortByAscFilteredList = state.todoList.sort((a, b) => {
        return a.title > b.title ? -1 : 1;
      });
      return {
        ...state,
        filteredTodoList: sortByAscFilteredList,
      };
    }

    case FILTER_TASK: {
      const filteredList =
        action.filterList.length > 0
          ? state.todoList.filter((item) =>
              action.filterList.includes(item.status)
            )
          : state.todoList;
      return {
        ...state,
        filteredTodoList: filteredList,
      };
    }

    default:
      return state;
  }
};
