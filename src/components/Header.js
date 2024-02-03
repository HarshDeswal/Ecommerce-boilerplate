import { useEffect } from 'react';
// import { auth } from '../utils/firebase';
// import { signOut } from "firebase/auth";
// import {useNavigate} from 'react-router-dom'
// import {useSelector} from 'react-redux';
// import { onAuthStateChanged } from "firebase/auth";
// import { addUser, removeUser } from '../utils/userSlice';
// import {useDispatch} from 'react-redux';
// import { LOGO, USER_AVATAR } from '../utils/constants';
// import { toggleGptSearchView} from "../utils/gptSlice";
const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleGptSearchClick = () => {
//     dispatch(toggleGptSearchView());
//   };
//   const user = useSelector(store => store.user);
//   const showGptSearch = useSelector(store => store.gpt.showGptSearch);
//   const handleSignOut = () => {
//     signOut(auth).then(() => {
//       // Sign-out successful.
      
//     }).catch((error) => {
//       // An error happened.
//       navigate('/error');
//     });
//   }
//   useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const {uid,email,displayName,photoURL} = user;
//         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
//         navigate('/browse');
//         // ...
//       } else {
//         // User is signed out
//         // ...
//         dispatch(removeUser());
//         navigate('/');
        
//       }
//     });
//     return () => unsubscribe();
//   },[]);
  return (
    <div className='h-20 w-full px-8 py-2 bg-blue-500 text-white  flex flex-col items-center md:flex-row justify-around'>
        <p className='font-semibold text-3xl'>ShopKart.</p>

        {<div className='flex justify-end md:justify-normal p-2 items-center'>
          <button className='py-2 px-4 m-2 text-white rounded-lg'>Products</button>
          <button className='font-bold text-white'>Sign Out</button>
          
        <div class="flex justify-center items-center">
            <div class="relative">
                <div class="absolute left-3">
                    <p class="flex items-center justify-center rounded-full bg-red-500 ml-3 -mt-1 px-1 text-[12px] text-white"></p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: ml-3 h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default Header;