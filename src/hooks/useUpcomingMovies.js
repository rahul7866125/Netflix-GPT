import { useEffect } from "react";
import { API_OPTIONS,  UPCOMINGMOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMoviesList } from "../utils/moviesSlice";


const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upcomingMoviesList = useSelector(store => store?.movies?.upcomingMoviesList);

    const getUseUpcomingMovies = async () =>{
        const data = await fetch(UPCOMINGMOVIES_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMoviesList(json.results));
    };
    
    useEffect(() =>{
        if(!upcomingMoviesList)
            getUseUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;

