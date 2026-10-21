import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDate: null,
    Status: false,
}

const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers:{
        login : (state , action ) =>{
            state.Status = true;
            state.userDate = action.payload; 
        },
        logout : (state  ) =>{
            state.Status = false;
            state.userDate =null;
        },
    }
})

export const {login , logout} = authSlice.actions;
export default authSlice.reducer;