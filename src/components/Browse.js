import React, { useEffect } from 'react'
import Header from './Header'
import ItemList from './ItemList'
import {useDispatch,useSelector} from 'react-redux'
import { addAllProducts } from '../utils/productSlice'


const Browse = () => {
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const data = await fetch("http://localhost:5000/products");
    const json = await data.json();
    dispatch(addAllProducts(json));
  }
  useEffect(() =>{
    fetchProducts();
  },[]);
  return (
    <div className='flex flex-col relative'>
        <Header/>
        <ItemList/>
        
    </div>
  )
}

export default Browse