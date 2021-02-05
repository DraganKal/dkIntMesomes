import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import messageReducer from "./messageReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  security: securityReducer,
  message: messageReducer,
});
