import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
    baseUrl: 'https://api.themoviedb.org/3/discover/movie',
    genre: null,
    year: null,
    actor: null,
    category: 'Movie',
    totalPages: 50,
    movieId: null,
    actorName: '',
    page: 1,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setGenres(state, action){
            state.genre = action.payload
        },
        setYear(state, action) {
            state.year = action.payload;
        },
        setActor(state, action) {
            state.actor = action.payload;
        },
        setActorName(state, action){
            state.actorName = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload;
            state.baseUrl = action.payload === 'Movie' 
                ? 'https://api.themoviedb.org/3/discover/movie' 
                : 'https://api.themoviedb.org/3/discover/tv';
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setTotalPages(state, action){
            state.totalPages = action.payload;
        },
        setMovieId(state, action){
            state.movieId = action.payload;
        },
        resetFilters(state) {
            return initialState;
        },
    }
});

export const selectFullUrl = (state) => {
    const { baseUrl, genre, year, actor, page } = state.filters;
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,
      ...(genre && { with_genres: genre }),
      ...(year && { primary_release_year: year }),
      ...(actor && { with_cast: actor }),
      page,
    });
    return `${baseUrl}?${params.toString()}`;
};

export const {
    setGenres,
    setYear,
    setActor,
    setActorName,
    setCategory,
    setPage,
    setTotalPages,
    setMovieId,
    resetFilters
} = filtersSlice.actions;

export default filtersSlice.reducer;
