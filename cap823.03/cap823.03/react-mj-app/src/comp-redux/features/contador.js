import { createSlice } from "@reduxjs/toolkit"

const inicialSate=100;

const contadorSlice=createSlice({
    name:"contador",
    initialState:{value:inicialSate},
    reducers:{
        incrementar:(state,action)=>{
            state.value=state.value+1
        },
        decrementar:(state,action)=>{
            state.value=state.value-1
        }
    }
})

export const{incrementar,decrementar}=contadorSlice.actions;

export default contadorSlice.reducer;
