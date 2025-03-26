/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import { RegisterLocalRequest,postLoginRequest } from "../../types/User";
import { AxiosError } from "axios";

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
export const loginUser = createAsyncThunk(
  "auth/login",
  async (loginData: postLoginRequest, { rejectWithValue }) => {
    try {
      const response = await userApi.login(loginData);
      return response;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      return rejectWithValue(axiosError.response?.data?.message || "Đăng nhập thất bại");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null as string | null, loading: false, error: null as string | null },
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
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
