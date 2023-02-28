import { configureStore } from "@reduxjs/toolkit";
import  projectSlice  from "./projectSlicer";
import axiosSlice from "./axiosSlicer";

export const Store =configureStore({

    reducer:{

        project:projectSlice,
        
        
        
        project1:axiosSlice,

    },

})