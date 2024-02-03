import {createSlice} from '@reduxjs/toolkit';
const productSlice = createSlice({
    name:"products",
    initialState : {
        allProducts:null,
        cartProducts:[],
        favouriteProducts:[],
        
    },
    reducers:{
        addAllProducts: (state,action) => {
            state.allProducts=action.payload;
        },
        addCartProducts: (state,action) => {
            state.cartProducts.push(action.payload);
        },
        addFavouriteProducts: (state,action) => {
            state.favouriteProducts.push(action.payload);
        },
        removeCartProducts: (state) => {
            state.cartProducts.pop();
        },
        removeFavouroteProducts: (state) => {
            state.favouriteProducts.pop();
        },
        clearCart:(state) => {
            state.cartProducts.length = 0;
        },
        clearFavourite:(state) => {
            state.favouriteProducts.length = 0;
        }
    }
});

export const {addAllProducts,addCartProducts,addFavouriteProducts,removeCartProducts,removeFavouroteProducts,clearCart,clearFavourite} = productSlice.actions;
export default productSlice.reducer;