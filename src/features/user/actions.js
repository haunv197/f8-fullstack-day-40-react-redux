import { SET_ITEMS } from "./consts";

const setItems = (payload) => ({
  type: SET_ITEMS,
  payload,
});

export { setItems };
