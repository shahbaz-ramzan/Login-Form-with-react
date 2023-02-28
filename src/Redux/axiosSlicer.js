import { createSlice } from "@reduxjs/toolkit";

const initialState =({
    user : [],
})

const axiosSlice = createSlice({
    name:"project1",
    initialState,

    reducers :{
        axiosUsers:(state,action) =>{
            // debugger
            state.user = action.payload.data;
        },
    },
})

export const  {axiosUsers} =axiosSlice.actions

export default axiosSlice.reducer;