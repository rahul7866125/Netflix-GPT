import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
     name:"movies",
     initialState: {
          moviesList: null,
          trailerVideo: null,
          popularMoviesList:null,
          topRatedMoviesList:null,
          upcomingMoviesList:null,
     },
     reducers:{
          addMoviesList: (state, action) =>{
             state.moviesList = action.payload;
          },
          addTrailerVideo: (state, action) =>{
             state.trailerVideo = action.payload;
          },
          addPopularMoviesList: (state, action) =>{
             state.popularMoviesList = action.payload;
          },
          addTopRatedMoviesList: (state, action) =>{
             state.topRatedMoviesList = action.payload;
          },              
          addUpcomingMoviesList: (state, action) =>{
             state.upcomingMoviesList = action.payload;
          },     
     }
});

export const {addMoviesList, addTrailerVideo, addPopularMoviesList, 
              addTopRatedMoviesList, addUpcomingMoviesList} = moviesSlice.actions;
export default moviesSlice.reducer;