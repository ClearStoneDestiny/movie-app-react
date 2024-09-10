import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from '../slices/popularMoviesSlice';
import filtersReducer from '../slices/filtersSlice';
import movieInfoReducer from '../slices/movieInfoSlice';
import actorsReducer from '../slices/actorsSlice';
import trailersReducer from '../slices/trailersSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    filters: filtersReducer,
    movieInfo: movieInfoReducer,
    actorsInfo: actorsReducer,
    trailers: trailersReducer,
  },
});
