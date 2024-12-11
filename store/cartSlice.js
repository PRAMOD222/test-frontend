import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array to hold cart items
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.product._id === action.payload.product._id);

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        updateCartItem(state, action) {
            const { productId, quantity } = action.payload;

            const existingItem = state.items.find(item => item.product._id === productId);
            if (existingItem) {
                existingItem.quantity = quantity;

                if (quantity <= 0) {
                    state.items = state.items.filter(item => item.product._id !== productId);
                }
            }

            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.product._id !== action.payload);
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },
    },
});

export const { addToCart, updateCartItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
