import React, { useState,useEffect } from 'react'
import Header from './Header'
import { useDispatch,useSelector } from 'react-redux'
import { clearFavourite,addFavouriteProducts } from '../utils/productSlice';



const Cart = () => {
  const cartData = useSelector(store => store.products.favouriteProducts);
  console.log(cartData);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({}); // State to manage quantities

  // Function to update quantity for a specific product
  const updateQuantity = (productId, newQuantity) => {
    if(newQuantity >= 0){
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: newQuantity
      }));
    }
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach(item => {
      const quantity = quantities[item.id] || 0;
      totalPrice += item.amount * quantity;
    });
    return totalPrice>=0?totalPrice:0;
  };

  useEffect(() => {
    const initialQuantities = {};
    cartData.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartData]);

  const deleteObject  = (itemId)=>{
    const newArray=cartData.filter((ele)=> ele.id!==itemId)
    dispatch(clearFavourite());
    newArray.length>0 && dispatch(addFavouriteProducts(newArray))

    setQuantities(prevQuantities => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  }
  
  

  return (
    <div>
      <Header />
      <div className="h-screen pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartData.length===0? null: cartData?.map(prod => (
              <div key={prod.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={prod.image} alt={prod.title} className="w-full rounded-lg sm:w-40 h-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{prod.title}</h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => updateQuantity(prod.id, (quantities[prod.id] || 0) - 1)}> - </span>
                      <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantities[prod.id]>=0 ? quantities[prod.id] : 0 } min="1" readOnly />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => updateQuantity(prod.id, (quantities[prod.id] || 0) + 1)}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-semibold">{"₹ " + prod.amount}</p><p onClick={deleteObject(prod.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <h2 className='text-2xl font-semibold'>Price Details</h2>
          <div class="mb-2 mt-2 flex justify-between">
            <p class="text-gray-700">Price</p>
            <p class="text-gray-700">{calculateTotalPrice()}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Discount Price</p>
            <p class="text-gray-700">100</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Delivery Charge</p>
            <p class="text-gray-700">50</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{calculateTotalPrice() + 150}</p>
              
            </div>
          </div>
          <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Place order</button>
        </div>
      </div>
      </div>
    </div>
      
    
    
  );
};

export default Cart;
