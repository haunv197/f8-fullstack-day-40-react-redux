import { combineReducers } from "redux";
import { reducer as productReducer } from "@/features/product";
import { reducer as provincesReducer } from "@/features/address";
import { reducer as postsReducer } from "@/features/post";
import { reducer as userReducer } from "@/features/user";

const rootReducer = combineReducers({
  product: productReducer,
  address: provincesReducer,
  post: postsReducer,
  user: userReducer,
});

export default rootReducer;
