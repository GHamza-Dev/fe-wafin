import { configureStore } from '@reduxjs/toolkit';
import authReduser from '../features/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReduser,
  },
});