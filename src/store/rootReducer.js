import { combineReducers } from "redux";
import { reducer as postsReducer } from "@/features/post";
import { reducer as userReducer } from "@/features/user";

const rootReducer = combineReducers({
  post: postsReducer,
  user: userReducer,
});

export default rootReducer;
