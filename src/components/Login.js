import React,{useState,useRef} from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm,setIsSignForm] = useState(true);
    const name = useRef("Demo");
    const email = useRef(null);
    const password = useRef(null);
    const toggleChange = () => {
        setIsSignForm(!isSignInForm); 
    };
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
            <p className='text-red-700 font-bold text-xl'></p>
            <button className='p-4 my-6 bg-blue-600 w-full rounded-lg text-white' >{isSignInForm ? "Login" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer text-blue-600' onClick={toggleChange}>
            {isSignInForm ? "New user? Create an account" : "Already registered? Login"}
            </p>
        </form>
        
    </div>
  )
}

export default Login