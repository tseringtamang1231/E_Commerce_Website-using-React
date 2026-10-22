import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import WhitelistSlice from "./whitelistSlice"
import cartReducer from "./cartSlice";


const store = configureStore({
    reducer:{
        auth : authSlice,
        whitelist : WhitelistSlice,
            cart: cartReducer,
    }
})
export default store;