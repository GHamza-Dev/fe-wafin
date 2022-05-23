import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  client: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getClient = createAsyncThunk("client/get", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token,
      id = { id: thunkAPI.getState().auth.user.id };
    return await userService.getClient(id, token);
  } catch ({ response }) {
    const { message } = response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateClient = createAsyncThunk(
  "client/get",
  async (client, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      client.id = thunkAPI.getState().auth.user.id;
      return await userService.editClient(client, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClient.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client = action.payload;
      })
      .addCase(getClient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.client = null;
      });
  },
});

export const { reset } = providerSlice.actions;
export default providerSlice.reducer;
