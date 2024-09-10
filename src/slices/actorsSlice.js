import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchActors = createAsyncThunk('actors/fetchActors', async (movieId) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);

    const data = await response.json();
    
    return ({
      ...data.cast,
    });
});

const actorsSlice = createSlice({
    name: 'actorsInfo',
    initialState: {
      actors: [],
      status: 'idle',
      error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchActors.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchActors.fulfilled, (state, action) => {
            state.status = 'succeeded';            
            state.actors = action.payload; 
          })
          .addCase(fetchActors.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
  });
  
  export default actorsSlice.reducer;

