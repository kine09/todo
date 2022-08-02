import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
