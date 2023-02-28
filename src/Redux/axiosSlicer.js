import { createSlice } from "@reduxjs/toolkit";

const initialState =({
    user : [],
})

const axiosSlice = createSlice({
    name:"project1",
    initialState,

    reducers :{
        axiosUsers:(state,action) =>{
            
            state.user = action.payload;
        },
    },
})

export const  {axiosUsers} =axiosSlice.actions

export default axiosSlice.reducer;