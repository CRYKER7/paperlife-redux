import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/slice';
import userReducer from '../features/userSlice'
import cartReducer from '../features/sliceCart'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer,
    cart: cartReducer
  },
});
