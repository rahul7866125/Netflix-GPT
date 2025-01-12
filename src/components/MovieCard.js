import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  if(!movie?.poster_path)
    return null;
  
  return (
     <div className='w-28 md:w-36 mx-2'>
        <img           
            alt='Movie_Poster'
            src={POSTER_CDN_URL + movie.poster_path}
        />
    </div>
  )
}

export default MovieCard