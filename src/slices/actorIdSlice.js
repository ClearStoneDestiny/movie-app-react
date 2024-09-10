import { createAsyncThunk } from "@reduxjs/toolkit";
import { setActor, setPage } from "./filtersSlice";

export const fetchActorId = createAsyncThunk('filters/fetchActorId', async (actorName, { dispatch }) => {    
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actorName}`);
    const data = await response.json();

    if(data.results.length > 0){
        const actorId = data.results[0].id;
        dispatch(setActor(actorId));
        dispatch(setPage(1))
    }
})