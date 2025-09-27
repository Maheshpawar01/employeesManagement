import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee";


export const fetchEmployees = createAsyncThunk("employees/fetchAll", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const fetchEmployeeById = createAsyncThunk("employees/fetchById", async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
});

export const createEmployee = createAsyncThunk("employees/create", async (payload) => {
  const res = await axios.post(API, payload);
  return res.data;
});

export const updateEmployee = createAsyncThunk("employees/update", async ({ id, payload }) => {
  const res = await axios.put(`${API}/${id}`, payload);
  return res.data;
});

export const deleteEmployee = createAsyncThunk("employees/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const employeesSlice = createSlice({
  name: "employees",
  initialState: { list: [], status: "idle", error: null },
  reducers: {
    // optional local reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => { state.status = "loading"; })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const idx = state.list.findIndex(e => e.id === action.payload.id);
        if (idx !== -1) state.list[idx] = action.payload;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.list = state.list.filter(e => e.id !== action.payload);
      });
  },
});

export default employeesSlice.reducer;
