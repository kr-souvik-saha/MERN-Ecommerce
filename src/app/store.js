import {
  configureStore
} from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import authReducer from '../features/Auth/authSlice';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartSlice
  },
});