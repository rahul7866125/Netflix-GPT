import React from 'react';
import { langConstants } from '../utils/langConstants';
import { useSelector } from 'react-redux';

const VideoTitle = ({title, overview}) => {
  const language = useSelector(store => store.appConfig.lang);

  return (
    <div className='w-screen aspect-video pt-[30%] md:pt-[20%] px-4 md:px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
      <p className='hidden md:block w-1/3 font-sans text-white'>{overview}</p>
      <button className='font-bold text-md bg-white text-black p-2 m-2 rounded-lg bg-gray-600 hover:opacity-80'>
      ▶️ {langConstants[language].play}
      </button>
      <button className='hidden md:inline bg-gray-500 text-white m-2 p-2 text-md bg-opacity-50 rounded-lg'>
        {langConstants[language].moreInfo}</button>
    </div>
  )
}

export default VideoTitle