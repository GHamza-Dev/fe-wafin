import { configureStore } from "@reduxjs/toolkit";
import authReduser from "../features/authSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    user: userReducer,
  },
});
