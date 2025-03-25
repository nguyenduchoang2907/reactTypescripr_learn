/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import { RegisterLocalRequest } from "../../types/User";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: RegisterLocalRequest, { rejectWithValue }) => {
    try {
      const response = await userApi.register(userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Đăng ký thất bại");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data as any;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
