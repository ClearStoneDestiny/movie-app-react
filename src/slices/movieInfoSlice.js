import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovieInfo = createAsyncThunk('movie/fetchMovieInfo', async (movieId) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);

    const data = await response.json();
    
    return ({
      ...data,
      formattedReleaseDate: new Date(data.release_date || data.first_air_date).toLocaleDateString('de-DE'),
      formattedRating: (data.vote_average).toFixed(2)
    });
});

const movieInfoSlice = createSlice({
    name: 'movieInfo',
    initialState: {
      movie: [],
      status: 'idle',
      error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchMovieInfo.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchMovieInfo.fulfilled, (state, action) => {
            state.status = 'succeeded';            
            state.movie = action.payload; 
          })
          .addCase(fetchMovieInfo.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
  });
  
  export default movieInfoSlice.reducer;