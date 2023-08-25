//SLICE
import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const{productosB}=data;
const indice=0;

export const prodBSlice=createSlice({
    name:"producto_bodega",
    initialState:{value:indice},
    reducers:{
        incrementarIndice:(state,action)=>{
            state.value=(state.value===productosB.length-1?0:state.value+1)          
        }
    }
})

export const{incrementarIndice}=prodBSlice.actions;
export default prodBSlice.reducer;