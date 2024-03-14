import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  message: "",
};

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:9001/login", {
      email: user.email,
      password: user.password,
    });
    return response.data.data;
  } catch (error) {
    if (error) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getUser = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:9001/me");
    return response.data.data; // Assuming the user data is nested under 'data' key
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
    // Handle other errors if needed
    throw error;
  }
});

export const Logout = createAsyncThunk("user/logout", async () => {
  await axios.delete("http://localhost:1104/logout");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
