import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        auth: authReducer,
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch