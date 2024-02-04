import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavourite, removeFavouroteProducts } from '../utils/productSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartData = useSelector(store => store.products.favouriteProducts);
  const dispatch = useDispatch();
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [quantities, setQuantities] = useState({}); // State to manage quantities

  // Function to update quantity for a specific product
  const updateQuantity = (productId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity
    }));
  };

  const handlePlaceOrder = () => {
    // Logic to place order goes here
    // Assuming order is placed successfully, show success prompt
    setShowOrderSuccess(true);
    setTimeout(()=>{
      dispatch(clearFavourite());
    },3000);

    // You can also reset cart or do other actions here
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach(item => {
      const quantity = quantities[item.id] || 0;
      totalPrice += item.amount * quantity;
    });
    return totalPrice;
  };

  // Set initial quantity to 1 for each cart item
  useEffect(() => {
    const initialQuantities = {};
    cartData.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartData]);

  if(cartData.length===0){
    return (
      <>
      <Header/>
      <div className='my-[200px] flex-col flex items-center'>
        <h1 className='font-bold text-2xl'>Your Cart is Empty</h1>
        <Link to="/browse" className='underline text-blue-500 mt-2'>Go to Home</Link>
      </div>
      </>
    )
  }

  // Function to remove item from cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFavouroteProducts());
    setQuantities(prevQuantities => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
  };

  return (
    <div>
      <Header />
      <div className="h-screen pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartData?.map(prod => (
              <div key={prod.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={prod.image} alt={prod.title} className="w-full rounded-lg sm:w-40 h-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{prod.title}</h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => updateQuantity(prod.id, quantities[prod.id] - 1)}> - </span>
                      <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantities[prod.id]} min="1" readOnly />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => updateQuantity(prod.id, quantities[prod.id] + 1)}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-semibold">{"₹ " + prod.amount}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={() => handleRemoveFromCart(prod.id)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <h2 className='text-2xl font-semibold'>Price Details</h2>
          <div class="mb-2 mt-2 flex justify-between">
            <p class="text-gray-700">Price</p>
            <p class="text-gray-700">{`₹ ${calculateTotalPrice()}`}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Discount Price</p>
            <p class="text-gray-700">- ₹ 100</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Delivery Charge</p>
            <p class="text-gray-700">₹ 50</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{`₹ ${calculateTotalPrice()-50}`}</p>
              
            </div>
          </div>
          <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={handlePlaceOrder}>Place order</button>
        </div>
        {/* Order success prompt */}
        {showOrderSuccess && (
          <div className="fixed bottom-10 left-0 right-0 flex justify-center">
            <div className="bg-green-500 text-white py-2 px-4 rounded-md">
              Order placed successfully!
            </div>
          </div>
        )}
            {/* Additional price details content */}
          </div>
        </div>
      </div>
    
    
  );
};

export default Cart;
