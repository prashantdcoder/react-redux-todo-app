import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
  MARK_AS_COMPLETED,
  PAGINATE_TASK,
  SEARCH_TASK,
  SET_VIEW,
  SORT_ASC,
  SORT_DSC,
} from "../contants/constant";

export const addTask = (taskPayload) => {
  return {
    type: ADD_TASK,
    taskPayload,
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

export const paginateTask = (page = 0) => {
  return {
    type: PAGINATE_TASK,
    page,
  };
};

export const editTask = (payLoad) => {
  return {
    type: EDIT_TASK,
    payLoad,
  };
};

export const setView = (view) => {
  return {
    type: SET_VIEW,
    view,
  };
};
