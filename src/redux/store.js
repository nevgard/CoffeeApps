import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import productByIdReducer from "./slice/productByIdSlice";
import authReducer from "./slice/AuthSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    productById: productByIdReducer,
    auth: authReducer,
  },
});
