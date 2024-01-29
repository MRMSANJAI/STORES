import { createSlice } from "@reduxjs/toolkit";

const initialState={
    totalItems:0,
    totalWeight:0,
    totalPrice:0,
};

const cartSummarySlice = createSlice({
    name:"cartSummary",
    initialState,
    reducers:{
        updateSummary: (state ,action)=>{
            const{totalItems,totalWeight,totalPrice } = action.payload;
            state.totalItems += totalItems;
            state.totalWeight+= totalWeight;
            state.totalPrice += totalPrice;
        },
    },

});
export const{ updateSummary }= cartSummarySlice.actions;
export default cartSummarySlice.reducer;
