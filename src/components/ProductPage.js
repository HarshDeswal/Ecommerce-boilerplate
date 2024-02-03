import React from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import Header from './Header';

const ProductPage = () => {
    const {prodId} = useParams();
    const productData = useSelector((store) => store.products.allProducts);
    const currentProduct = productData.filter(prod => prod.id === prodId);
    
  return (
    <div>
        <Header/>
        <div class="my-[100px]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full aspect-auto" src={currentProduct[0].image} alt={currentProduct[0].title}/>
                    
                </div>
                
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{currentProduct[0].title}</h2>
                
                <p class="text-black  text-sm mb-4 ">
                    {currentProduct[0].description}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        
                        <span class="text-black font-semibold text-3xl">${" "+currentProduct[0].amount}</span>
                    </div>
            
                </div>
                <div class="flex mb-4 mt-[190px]">
                    <div class="w-1/2 px-2">
                        <button class="w-full text-black py-2 px-4 rounded-sm font-bold hover:bg-black hover:text-white border-2 border-black">Buy Now</button>
            
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-black  text-white dark:text-white py-2 px-4 hover:bg-white hover:text-black rounded-sm font-bold border-2 border-black ">Add to Basket</button>
                    </div>
                </div>
                
            
    
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default ProductPage