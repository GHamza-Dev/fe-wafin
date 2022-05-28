import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  client: null,
  provider: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

export const getClient = createAsyncThunk(
  "user/get_client",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token,
        id = { id: thunkAPI.getState().auth.user.id };
      return await userService.getClient(id, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateClient = createAsyncThunk(
  "user/update_client",
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

export const updateProvider = createAsyncThunk(
  "user/update_provider",
  async (provider, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      provider.id = thunkAPI.getState().auth.user.id;
      return await userService.editProvider(provider, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerProvider = createAsyncThunk(
  "user/register_provider",
  async (provider, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      provider.client_id = thunkAPI.getState().auth.user.id;
      return await userService.registerProvider(provider, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProvider = createAsyncThunk(
  "user/get_provider",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token,
        id = { id: thunkAPI.getState().auth.user.id };
      return await userService.getProvider(id, token);
    } catch ({ response }) {
      const { message } = response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClient.pending, (state) => {
        state.isLoading = true;
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
      })
      .addCase(updateClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(registerProvider.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerProvider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client = action.payload;
      })
      .addCase(registerProvider.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.client = null;
      })
      .addCase(getProvider.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProvider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.provider = action.payload;
      })
      .addCase(updateProvider.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProvider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client = action.payload;
      })
      .addCase(updateProvider.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.client = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
