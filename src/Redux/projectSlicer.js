import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    
    User: [],
}

const projectSlice = createSlice({
    name:"project",
    initialState,

    reducers:{
        setUsers:(state,action)=>{
            state.User =action.payload

        },
    },
})

export const {setUsers}=projectSlice.actions
export default projectSlice.reducer