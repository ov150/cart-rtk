import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
