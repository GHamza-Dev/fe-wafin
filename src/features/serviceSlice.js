import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceService from "../services/serviceService";

const initialState = {
  services: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

export const addService = createAsyncThunk(
  "service/add",
  async (service, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      service.provider_id = thunkAPI.getState().auth.user.id;
      return await serviceService.addService(service, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUsersServices = createAsyncThunk(
  "service/get-user-services",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const provider = {};
      provider.provider_id = thunkAPI.getState().auth.user.id;
      return await serviceService.getUsersServices(provider, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeService = createAsyncThunk(
  "service/remove",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await serviceService.deleteService(id, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(addService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUsersServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.services = action.payload;
      })
      .addCase(getUsersServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(removeService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = serviceSlice.actions;
export default serviceSlice.reducer;
