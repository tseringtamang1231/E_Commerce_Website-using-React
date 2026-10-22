import { createSlice } from "@reduxjs/toolkit";
// LOAD: read the saved list when the app starts
let saved = []
try {
  saved = JSON.parse(localStorage.getItem("whitelist")) || []
} catch (e) {
  saved = []
}
const initialState = {
    items :[]
}

const whitelist = createSlice({
    name :"whitelist",
    initialState,
    reducers:{
        Favourite: (state, action) =>{
            const exist = state.items.some((item ) => item.id === action.payload.id)
            if (exist)  state.items = state.items.filter((item) => item.id !== action.payload.id )
            else state.items.push(action.payload)
        }

    }
})

export const {Favourite} = whitelist.actions
export default whitelist.reducer