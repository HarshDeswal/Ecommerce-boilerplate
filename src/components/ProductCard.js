import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addFavouriteProducts, clearFavourite, removeFavouroteProducts } from '../utils/productSlice';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const [isFavorite,setFavorite] = useState(false);
    const favouriteProduct = useSelector((store) => store.products.favouriteProducts);
    const dispatch = useDispatch();
    const handleCart = () => {
        
    }
    const deleteObject = (object)=>{
        const newArray=favouriteProduct.filter((ele)=> ele.id!==object.id)
        dispatch(clearFavourite());

        newArray.length!==0 && dispatch(addFavouriteProducts(newArray))

    }
    const checkIfObjectExists=( object) => {
        return favouriteProduct.some((item) => item.id === object.id);
      }
    const handleFavourite = () => {
        if(!isFavorite  && !checkIfObjectExists(product)){
            dispatch(addFavouriteProducts(product))
        }
        if(isFavorite && checkIfObjectExists(product)){
            deleteObject(product);
        }
        setFavorite(!isFavorite);
    }
  return (
    
    <div className='mx-8 my-6 shadow-xl rounded-xl'>
        <div data-testid = "resCard" className='res-card'>
        <Link to={'/product/'+product.id} key={product.id}>
            <img
                className='res-logo'
                alt={product.title}
                src={
                    product.image
                }
            />
            <p className='ml-2 text-sm font-semibold h-1/6'>{product.title}</p>
            <p className='text-sm mt-2 ml-2'>{"₹ "+product.amount}</p>
            <p className='text-xs mt-2 ml-2 pl-1 bg-green-500 w-6 text-white '>{product.rating}</p>
        
            <div className='flex justify-between mx-2'>
                {isFavorite ? <p onClick={handleFavourite}>❤️</p>:<p onClick={handleFavourite}>🩶</p>}
                <p onClick={handleCart}>
                🛒
                </p>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default ProductCard