import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import Shimmer from './Shimmer';

const GPTMovieSuggestion = () => {
   const {gptMovieNames, tmdbResultMovies} = useSelector(state => state.gpt);
  if(!gptMovieNames)
    return null;

  return (
    <div className="p-4 mx-2 md:mx-4 mt-10 md:mt-20 text-white font-bold bg-black opacity-80">
      <div>
        {gptMovieNames.map((movieName, index) => 
         <MovieList key={index} 
                    title={movieName} moviesList={tmdbResultMovies[index]}/>
          )}
      </div>
    </div>
  )
}

export default GPTMovieSuggestion