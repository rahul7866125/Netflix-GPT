import { useEffect } from "react";
import { API_OPTIONS, POPULARMOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMoviesList } from "../utils/moviesSlice";


const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularMoviesList = useSelector(store => store?.movies?.popularMoviesList);

    const getUsePopularMovies = async () =>{
        const data = await fetch(POPULARMOVIES_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMoviesList (json.results));
    };
    
    useEffect(() =>{
        if(!popularMoviesList)
           getUsePopularMovies();
    }, []);
}

export default usePopularMovies;

