import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBcg from './VideoBcg'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const MainContainer = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const moviesList = useSelector(store => store?.movies?.moviesList);
    
    if(moviesList == null) return;
    const currentMovie = moviesList[0];
   
  return (
    <div className='pt-[20%] md:pt-0 bg-black'>
        <VideoTitle title={currentMovie.original_title} overview={currentMovie.overview}/>
        <VideoBcg movieId={currentMovie.id}/>
    </div>
  )
}

export default MainContainer