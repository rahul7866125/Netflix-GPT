import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTrailerVideo = (movieId) =>{
   const dispatch = useDispatch();

   const getTrailerVideo = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos', API_OPTIONS);
         const json = await data.json();
         dispatch(addTrailerVideo(json.results));         
   }

   useEffect(() => {
     getTrailerVideo();
   }, []);
}

export default useTrailerVideo;