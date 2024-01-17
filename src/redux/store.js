import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/slices/productSlice";
import { appReducer } from "./reducers";
import cartSlice from "../components/slices/cartSlice";

const store = configureStore({
  reducer: {
    reducer: appReducer,
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;