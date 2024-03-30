import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6608523ba2a5dd477b1454db.mockapi.io";

export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  "catalog/getCampersById",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/?_id=${credentials}`);
      return response.data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
