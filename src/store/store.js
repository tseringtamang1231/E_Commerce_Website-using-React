import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import WhitelistSlice from "./whitelistSlice"


const store = configureStore({
    reducer:{
        auth : authSlice,
        whitelist : WhitelistSlice
    }
})
export default store;