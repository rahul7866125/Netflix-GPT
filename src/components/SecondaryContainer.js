import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesList = useSelector(store => store.movies?.moviesList);
  const popularMoviesList = useSelector(store => store.movies?.popularMoviesList);
  const topRatedMoviesList = useSelector(store => store.movies?.topRatedMoviesList);
  const upcomingMoviesList = useSelector(store => store.movies?.upcomingMoviesList);

  return (
    <div className='bg-black'>
      <div className='mt:0 md:-mt-52 pl-4 relative z-20 overflow-x-hidden'>
          {moviesList && <MovieList title = "Now Playing" moviesList = {moviesList}/>}
          {topRatedMoviesList && <MovieList title = "Top Rated" moviesList = {topRatedMoviesList}/>}
          {popularMoviesList && <MovieList title = "Popular" moviesList = {popularMoviesList}/>}          
          {upcomingMoviesList && <MovieList title = "Upcoming" moviesList = {upcomingMoviesList}/>}         
      </div>               
    </div>
  )
}

export default SecondaryContainer