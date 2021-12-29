import { ADD_TASK } from "../contants/constant";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};
