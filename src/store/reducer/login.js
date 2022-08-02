import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN } from "../../utils/const";

export const login = createAsyncThunk("login/login", async (params) => {
  const res = await axios.post("https://reqres.in/api/login", params);
  return res.data;
});

const initialState = {
  token: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      localStorage.removeItem(TOKEN);
    },
    saveToken: (state, action) => {
      console.log(action);
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.auth.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem(TOKEN, action.payload.token);
      console.log(state.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.message;
    });
  },
});

export const { logout, saveToken } = loginSlice.actions;

export default loginSlice.reducer;
