import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkDataValidation } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import { BACKGRND_IMG } from '../utils/constants';


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [message, setMessage] = useState();
   
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const clickHandler = ()=>{
        setIsSignIn(!isSignIn);
    }

    const submitClickHandler = ()=> {
        // Validate the form-data
        const errorMsg = checkDataValidation(name?.current?.value, email.current.value, password.current.value);
        setMessage(errorMsg);
        if(errorMsg) return;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
            })
            .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setMessage(errorMessage);   
    });
        }

        else {           
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
             
        })
         .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setMessage(errorMessage);
         });
       }
   }

  return (
    <div>
        <Header/>
        <div className="absolute">
            <img className="h-screen object-cover md:h-auto" src={BACKGRND_IMG}
            alt='backgrnd-img'/>
        </div>
        <form onSubmit={(e)=> {e.preventDefault()}} 
              className="absolute w-10/12 md:w-3/12 bg-black my-40 mx-auto p-4 left-0 right-0 text-white bg-opacity-70 rounded-lg">
            <h1 className="font-bold text-2xl md:text-3xl my-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input ref={name} type="text" placeholder="Name" className="my-4 p-4 w-full bg-slate-500 rounded-lg opacity-80"/>}
            
            <input ref={email} type="text" placeholder="Email address" className="my-4 p-4 w-full bg-slate-500 rounded-lg opacity-80"/>
            <input ref={password} type="password" placeholder="Password" className="my-4 p-4 w-full bg-slate-500 rounded-lg opacity-80"/>
            <p className="text-red-600">{message}</p>

            <button className="my-4 p-2 bg-red-600 w-full rounded-lg" onClick={submitClickHandler}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            {isSignIn ? <p className="my-4 cursor-pointer" onClick={clickHandler}>New to Netflix? Sign up now</p> :
            <p className="my-4 cursor-pointer" onClick={clickHandler}>Existing User? Sign In</p>}
            
        </form>
    </div>
  )
}

export default Login