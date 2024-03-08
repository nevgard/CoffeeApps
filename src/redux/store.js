import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import productByIdReducer from "./slice/productByIdSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    productById: productByIdReducer,
  },
});
