import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptSearch: false,
        gptMovieNames: null,
        tmdbResultMovies: null,
    },

    reducers: {
        changeGPTSearchState: (state) => {
            state.gptSearch = !state.gptSearch;
        },
        addGPTSearchResult: (state, action) =>{
            state.gptMovieNames = action.payload.gptMovieNames;
            state.tmdbResultMovies = action.payload.tmdbResultMovies;
        },
    },
});

export const {changeGPTSearchState, addGPTSearchResult} = gptSlice.actions;
export default gptSlice.reducer;