import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addItem:(state,action) =>{
            return [...state, action.payload];
        },
        removeItem:(state, action)=>{
            return state.filter(item => item.name !== action.payload.name)
        },
    },
});
 
export const { addItem ,removeItem }= cartSlice.actions;

export default cartSlice.reducer;