import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  MARK_AS_COMPLETED,
  SEARCH_TASK,
  SORT_ASC,
  SORT_DSC,
} from "../contants/constant";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};

export const markAsCompleted = (todoId) => {
  return {
    type: MARK_AS_COMPLETED,
    todoId,
  };
};

export const deleteTask = (todoId) => {
  return {
    type: DELETE_TASK,
    todoId,
  };
};

export const searchTask = (task) => {
  return {
    type: SEARCH_TASK,
    task,
  };
};

export const sortByAsc = () => {
  return {
    type: SORT_ASC,
  };
};

export const sortByDsc = () => {
  return {
    type: SORT_DSC,
  };
};

export const filterTask = (filterList) => {
  return {
    type: FILTER_TASK,
    filterList,
  };
};
