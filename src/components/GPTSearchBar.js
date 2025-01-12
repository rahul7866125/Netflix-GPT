import React, { useState } from "react";
import { langConstants } from "../utils/langConstants";
import { useDispatch, useSelector} from "react-redux";
import OpenAI from 'openai';
import {API_OPTIONS, OPENAI_KEY} from '../utils/constants';
import {addGPTSearchResult} from '../utils/gptSlice';
import CloseIcon from '@mui/icons-material/Close';


const GPTSearchBar = () => {
  const language = useSelector((store) => store.appConfig.lang);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  
  const handleSearchText = (event)=> {
    setSearchText(event.target.value)
  }

  const handleClearText = ()=>{
    setSearchText('');
  }

  const searchTMDBMovie = async (movieName) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }


  const handleGPTSearch = async () =>{
    const query = 'Act as a movie recommendation system and suggest some movies for the query :'+ searchText +' Result should contain only five movies and always be comma separated and look like - Spider Man, Elemental, Phir Hera Pheri';
    const client = new OpenAI({
      apiKey: OPENAI_KEY,
      dangerouslyAllowBrowser: true
    });

    const gptSearchResult = await client.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-4o-mini',
    });

    const movieNames = gptSearchResult?.choices?.[0].message?.content.split(',');
    const promiseArray = movieNames.map((movieName)=>searchTMDBMovie(movieName));

    const tmdbMovies = await Promise.all(promiseArray);
    dispatch(addGPTSearchResult({gptMovieNames: movieNames, tmdbResultMovies:tmdbMovies}));

  };

  return (
    <>
     <div className="pt-[30%] md:pt-0 md:mt-0 pt-24 relative ">
      <span className="text-white font-bold md:pt-20 text-2xl md:text-5xl flex justify-center">Let AI be your Movie Guru!</span>
      <p className="text-white text-xl flex justify-center mt-2">Discover Family-Friendly Flicks for a Perfect Movie Night</p>
     </div>
      <div className="mt-14 flex justify-center">
        <form className="w-[99%] md:w-1/2 bg-gray-600 grid grid-cols-12 rounded-md relative" 
              onSubmit={(e)=>e.preventDefault()}>
          <input
            className="p-2 m-2 col-span-10 rounded-md"
            value={searchText}
            type="text"
            onChange={handleSearchText}
            placeholder={langConstants[language].placeHolder}
          ></input>
          {searchText && <span className='icon-fill m-2 p-2 cursor-pointer absolute right-28' onClick={handleClearText}>
            <CloseIcon style={{ fontSize: '24px' }}/>
              </span>}
          <button className="p-2 mx-2 my-2 bg-red-600 text-white col-span-2 rounded-md" onClick={handleGPTSearch}>
            {langConstants[language].search}
          </button>
        </form>
      </div>
      </>
  );
};

export default GPTSearchBar;
