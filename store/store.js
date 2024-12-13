// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import componentReducer from './componentSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    components: componentReducer,
    cart: cartReducer

  },
});

export default store;
