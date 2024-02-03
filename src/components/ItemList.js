import React from 'react'
import {useSelector} from 'react-redux'
import ProductCard from './ProductCard';
const ItemList = () => {
  const productData = useSelector((store) => store.products.allProducts);
  if(!productData) return null;
  return (
    <div>
        <div className='res-container'>
            {productData?.map(prod => <ProductCard key={prod.id} product={prod}/>)}
            
            
            
                
            
        </div>
    
    
    </div>

  )
}

export default ItemList