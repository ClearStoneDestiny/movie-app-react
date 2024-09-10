import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTotalPages } from "./filtersSlice";

export const fetchTotalPages = createAsyncThunk('filters/fetchTotalPages', async (_, { dispatch, getState }) => { 
    const state = getState();
    const url = state.filters.baseUrl;
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`${url}?api_key=${apiKey}`);
    const data = await response.json();

    dispatch(setTotalPages(data.total_pages));
});