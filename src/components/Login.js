import React,{useState,useRef} from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { addUser } from '../utils/userSlice';
const Login = () => {
    const [isSignInForm,setIsSignForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useRef("Demo");
    const email = useRef(null);
    const password = useRef(null);
    const toggleChange = () => {
        setIsSignForm(!isSignInForm); 
    };

    const handleButtonClick = () => {
      //validate the form data
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return ;
      if(!isSignInForm){ // Sign up
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.valueOf
      }).then(() => {
        // Profile updated!
        // ...
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate('/browse');
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message);
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
      // ..
    });
  
      }
      else{
        //sign in
        signInWithEmailAndPassword(auth,email.current.value, 
          password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/browse')
      
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage);
    });
  }}

  return (
    <div className='bg-blue-100'>
        <Header/>
        
        <form 
        onSubmit={(e)=> e.preventDefault()}
        className='w-full md:w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-white text-black rounded-lg bg-opacity-80 shadow-md'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Login" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-100 rounded-2xl'/>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-100 rounded-2xl'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-100 rounded-2xl'/>
            <p className='text-red-700 font-bold text-xl'>{errorMessage}</p>
            <button className='p-4 my-6 bg-blue-600 w-full rounded-lg text-white'onClick={handleButtonClick} >{isSignInForm ? "Login" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer text-blue-600' onClick={toggleChange}>
            {isSignInForm ? "New user? Create an account" : "Already registered? Login"}
            </p>
        </form>
        
    </div>
  )
}

export default Login