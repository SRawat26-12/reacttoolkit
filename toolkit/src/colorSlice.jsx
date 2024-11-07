import {createSlice} from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgclr:"green"
    },
    reducers:{
        changeColor:(state)=>{
            state.bgclr="yellow"
        }
    }

})
export const {changeColor}=colorSlice.actions;
export default colorSlice.reducer;