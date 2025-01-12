import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const GPTSearchState = useSelector(state =>state.gpt?.gptSearch);

  return (
    <div className='relative'>
       <Header/>
        {GPTSearchState ? <GPTSearch/> :
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
         }       
    </div>   
  )
}

export default Browse