import todoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
