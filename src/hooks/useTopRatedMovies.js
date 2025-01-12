import { useEffect } from "react";
import { API_OPTIONS, TOPRATEDMOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMoviesList } from "../utils/moviesSlice";


const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const topRatedMoviesList = useSelector(store => store?.movies?.topRatedMoviesList);

    const getUseTopRatedMovies = async () =>{
        const data = await fetch(TOPRATEDMOVIES_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMoviesList(json.results));
    };
    
    useEffect(() =>{
        if(!topRatedMoviesList)
           getUseTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;

