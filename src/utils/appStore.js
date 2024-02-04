import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';
import userSlice from './userSlice';

const appStore = configureStore(
    {
        reducer: {
            products: productSlice,
            user:userSlice
        }
    }
)

export default appStore;