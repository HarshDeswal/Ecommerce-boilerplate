import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import Cart from './Cart';

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Favourites from './Favourites';
import ProductPage from './ProductPage';



const Body = () => {
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/browse",
        element: <Browse/>,
    },
    {
        path: "/orders",
        element: <Cart/>
    },
    {
        path:"/favourites",
        element: <Favourites/>
    },
    {
      path:"/product/:prodId",
      element: <ProductPage/>
    }
    

  ]);
  
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;