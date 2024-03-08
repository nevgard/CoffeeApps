import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  product: [],
  loading: false,
  error: null,
};

export const getProductById = createAsyncThunk("product", (id) => {
  return axios.get(`http://localhost:9001/products/${id}`).then((response) => {
    return response.data;
  });
});

const productByIdSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default productByIdSlice.reducer;
