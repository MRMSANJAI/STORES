import { configureStore } from "@reduxjs/toolkit";
// import rightDrawerSlice from './components/features/rightDrawerSlice'
// import { modalSlice } from "./components/features/modalSlice";
// import { leadsSlice } from "./components/features/leadsSlice"; 
// import { headerSlice } from "./components/features/headerSlice";
import cartReducer from './components/features/cartSlice';
import cartSummaryReducer from './components/features/cartSummarySlice';
// const combinedReducer = {
//     header : headerSlice,
//     rightDrawer : rightDrawerSlice,
//     modal : modalSlice,
//     lead : leadsSlice
//   }

   const store = configureStore({
    reducer: {
      cart: cartReducer,
      cartSummary:cartSummaryReducer,
    },
});
  // export default configureStore({
  //     reducer: combinedReducer
  // })
  export default store;