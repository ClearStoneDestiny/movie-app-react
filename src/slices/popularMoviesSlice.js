import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectFullUrl } from './filtersSlice';
import { setTotalPages } from './filtersSlice';

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async (_, { dispatch, getState }) => {
    const fullUrl = selectFullUrl(getState());
    const response = await fetch(fullUrl);
    const data = await response.json();

    dispatch(setTotalPages(data.total_pages))

    return data.results.map(movie => ({
      ...movie,
      formattedReleaseDate: new Date(movie.release_date || movie.first_air_date).toLocaleDateString('de-DE'),
      formattedRating: (movie.vote_average).toFixed(2)
    }));
});

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default popularMoviesSlice.reducer;


