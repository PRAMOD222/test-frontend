import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],        // Stores items in the cart
    isSideCartOpen: false // Controls the visibility of the side cart
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            // Check if the product already exists in the cart
            const existingProduct = state.cartItems.find(item => item._id === product._id);

            if (existingProduct) {
                // If the product exists, increase its quantity
                existingProduct.quantity += 1;
            } else {
                // If the product does not exist, add it with an initial quantity of 1
                state.cartItems.push({ ...product, quantity: 1 });
            }
        },
        updatequantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const cartItem = state.cartItems.find(item => item._id === productId);
            if (cartItem) {
                cartItem.quantity = quantity;
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        toggleSideCart: (state) => {
            state.isSideCartOpen = !state.isSideCartOpen; // Toggles the state of the cart
        },
    },
});

export const { addToCart, removeFromCart, clearCart, toggleSideCart, updatequantity } = cartSlice.actions;
export default cartSlice.reducer;