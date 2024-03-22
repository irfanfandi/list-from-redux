import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ACTION } from "../actions/constanta";

const PERSIST_CONFIG = {
  key: "app",
  root: "root",
  storage,
};

const initialState = {
  data: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
const AuthReducers = persistReducer(PERSIST_CONFIG, AuthReducer);

const rootReducer = combineReducers({
  auth: AuthReducers,
});

export default rootReducer;
