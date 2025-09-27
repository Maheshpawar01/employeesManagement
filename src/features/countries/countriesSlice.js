// src/features/countries/countriesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/country";

export const fetchCountries = createAsyncThunk("countries/fetchAll", async () => {
  const res = await axios.get(API);
  return res.data;
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
