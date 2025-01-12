import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BACKGRND_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BACKGRND_IMG} alt="logo" />
      </div>
      <div>      
        <GPTSearchBar/>
        <GPTMovieSuggestion/>
    </div> 
    </> 
  )
}

export default GPTSearch;