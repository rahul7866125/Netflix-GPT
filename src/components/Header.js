import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {LOGO, PROFILE_ICON, SUPPORTED_LANGUAGES} from '../utils/constants';
import { changeGPTSearchState } from '../utils/gptSlice';
import { changeLanguage } from '../utils/appConfigSlice';
import { langConstants } from '../utils/langConstants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const GPTSearchState = useSelector(state =>state.gpt?.gptSearch);
  const dispatch = useDispatch();
  const language = useSelector(store => store.appConfig.lang);

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {         
        dispatch(addUser({uid:user.uid, email:user.email, displayName:user.displayName}));        
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // unsubscribe when component unmount
  }, []);

  const handleGPTSearch = () =>{
    dispatch(changeGPTSearchState());
  }

  const handleLangChange = (e) =>{
       dispatch(changeLanguage(e.target.value));
  }

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="absolute w-screen px-2 py-0 md:py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
            className="w-28 md:w-52"
            alt="logo" 
            src={LOGO}
           />
           { user &&
             <div className="flex">
              <select className='p-2 mt-0 mx-4 mb-14 mt-2 bg-gray-500 text-white rounded-md' onChange={handleLangChange}>
                {SUPPORTED_LANGUAGES.map(lang => 
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.value}
                </option>)}
              </select>
              <div className='mx-2'>
              <button onClick={handleGPTSearch} className="font-bold p-1 md:p-2 mr-6 mt-2 mb-10 bg-pink-600 text-white rounded-md">
                {GPTSearchState ? langConstants[language].home : langConstants[language].gptSearch}
                </button>
              </div>             
             <div className='mr-4'>
             <img 
               className="w-10 mt-2"
               alt="Profile Icon" 
               src={PROFILE_ICON}            
             />
             <button onClick={handleSignOut}  className="font-bold py-1 text-white">{langConstants[language].signOut}</button>          
             </div>            
           </div>}       
    </div>
  )
}

export default Header