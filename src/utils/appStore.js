import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';

const appStore = configureStore(
    {
        reducer: {
            products: productSlice
        }
    }
)

export default appStore;