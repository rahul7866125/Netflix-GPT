import { useEffect } from "react";
import { API_OPTIONS, NOWPLAYINGMOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addMoviesList} from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const moviesList = useSelector(store => store?.movies?.moviesList);

    const getNowPlayingMovies = async () =>{
        const data = await fetch(NOWPLAYINGMOVIES_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addMoviesList(json.results));
    };
    
    useEffect(() =>{
        if(!moviesList)
           getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;

