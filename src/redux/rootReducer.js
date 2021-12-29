import { combineReducers } from "redux";
import { taskReducer } from "./reducers/reducer";

const rootReducers = combineReducers({
  taskReducer,
});

export default rootReducers;
