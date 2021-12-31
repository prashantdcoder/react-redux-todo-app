import { ADD_TASK, MARK_AS_COMPLETED } from "../contants/constant";

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
