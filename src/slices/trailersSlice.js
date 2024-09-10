import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrailers = createAsyncThunk('actors/fetchActors', async (movieId) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);

    const data = await response.json();
    
    return ([
      ...data.results,
    ]);
});

const trailersSlice = createSlice({
    name: 'trailers',
    initialState: {
      trailers: [],
      status: 'idle',
      error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchTrailers.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchTrailers.fulfilled, (state, action) => {
            state.status = 'succeeded';            
            state.trailers = action.payload; 
          })
          .addCase(fetchTrailers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
  });
  
  export default trailersSlice.reducer;