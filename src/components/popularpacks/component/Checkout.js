import React, { useEffect, useState } from 'react';
import Navfooter from './Navfooter';
import { useNavigate } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../features/cartSlice';
import { updateSummary } from '../../features/cartSummarySlice';

const Checkout = () => {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count1, setCount1] = useState(0);
    const dispatch = useDispatch();
    const [totalItems, setTotalItems] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const increaseCount = () => {
      setCount(prevCount => prevCount + 1);
    };
    const decreaseCount = () => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
      }
    };
      //  const increaseCount1 = () => {
      //   if(count1 < cartItems.length + 1){
      //     setCount1((prevCount) => prevCount + 1);
      //     setTotalItems(totalItems + 1);
      //     setTotalWeight(totalWeight +items.weight);
      //     setTotalPrice(totalPrice + items.price);
      //      dispatch(updateSummary({ totalItems, totalWeight, totalPrice }));
      //     } 
      //     };
       
      //   const decreaseCount1 = () => {
      //     if (count1 > 0) {
      //       setCount1((prevCount) => prevCount - 1);
      //       setTotalItems(totalItems - 1);
      //       setTotalWeight(totalWeight- items.weight);
      //       setTotalPrice(totalPrice - items.price);
      //       dispatch(updateSummary({ totalItems, totalWeight, totalPrice }));
      //    }
      //  };

      

    // const increaseCount2 = () => {
    //   setCount2(prevCount => prevCount + 1);
    // };
    // const decreaseCount2 = () => {
    //   if (count2 > 0) {
    //     setCount2(prevCount => prevCount - 1);
    //   }
    // };

    const cartItems = useSelector((state)=>state.cart)
    const cartSummary =useSelector((state)=>{
      console.log(state);
      return state.cartSummary;
    });

    useEffect(()=>{
           let totalItems=0;
           let totalWeight=0;
           let totalPrice=0;

           cartItems.forEach((items)=>{
                      totalItems+= 1;
                      totalWeight += parseFloat(items.weight) ;
                      totalPrice += parseFloat(items.price);
              });  
            setTotalItems(totalItems);
            setTotalWeight(totalWeight);
            setTotalPrice(totalPrice);
            dispatch(updateSummary({ totalItems, totalWeight, totalPrice}));
         },[cartItems ,dispatch]);

   

    const items={
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoIBBhAOfbIqyQYqgYFz89Fa96Ud4mF5HW253k2LlEd39a8NzRt5RejD4u3FLeb3_MYI&usqp=CAU",
      name:'Bundel Pack',
      price:20,
      weight:25,
      quantity:count 
    }

    const handleRemoveItem = () => {
      dispatch(removeItem(items,cartItems));
    };
  return ( 
    <div>
      <div>
        {cartItems.map((item,index)=>(
          <div key = {index}  className="flex mt-5 justify-around">
           <div className="w-16"> 
             <img src={item.image}/>
           </div>
           <div>
              <p>{item.name}</p>
              <p>{item.weight}</p>
           <div className="flex gap-7 justify-center content-center">
              <button onClick={increaseCount} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">+</button>
              <p class="text-xl">{count}</p>
              <button onClick={decreaseCount} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">-</button>
              </div>
          </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => handleRemoveItem(items,cartItems)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <p className="font-thin text-gray-400">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

            {/* <div>
            <div className="flex mt-5 justify-around">
                 <div className="w-16">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoIBBhAOfbIqyQYqgYFz89Fa96Ud4mF5HW253k2LlEd39a8NzRt5RejD4u3FLeb3_MYI&usqp=CAU" alt="sulphurfreesugar" />
                </div>
               <div>
                  <p>Sulphurfree Bura</p>
                   <p>570ml</p>
                <div className="flex gap-7 justify-center content-center">
                     <button onClick={increaseCount2} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">+</button>
                      <p class="text-xl">{count2}</p>
                     <button onClick={decreaseCount2} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">-</button>
                </div>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
             </svg>
              <p className="font-thin text-gray-400">$20</p>
            </div>
            </div>
            </div> */}
            
            <div className='ml-3 mt-2'>
                <h1 className='font-semibold text-md'>Add Coupon</h1>
                <input type="text" placeholder="Enter Voucher Code" className="input input-bordered w-3/5 mt-2 " />
                <button className="btn ml-2 w-32 hover:bg-slate-400 cursor-pointer">Apply</button>
            </div>
            {cartSummary && (
                <div className='flex flex-col mt-8 ml-5 gap-6'>
                  <p className='flex justify-between text-base'>Total Item<span className=' text-black font-medium text-base mr-6'>{cartSummary.totalItems}</span></p>
                  <p className='flex justify-between text-base'>Weight<span className=' text-black font-medium mr-6'>{cartSummary.totalWeight}kg</span></p>
                  <p className='flex justify-between text-base'>Price<span className=' text-black font-medium mr-6'>$ {cartSummary.totalPrice.toFixed(2)}</span></p>
                  <p className='border border-dashed border-slate-400'></p>
                  <p className='flex justify-between text-base'>Total Price<span  className=' text-black font-medium mr-6'>$ {cartSummary.totalPrice.toFixed(2)}</span></p>
               </div>
              )}
              <div className='grid place-content-center mt-5'>
              <button className="btn w-80 rounded-lg bg-green-500 text-white" onClick={()=> navigate("/carddetails")}>Checkout</button>
              </div>
              <div className='fixed bottom-0 w-full'>
                <Navfooter/>
              </div>
    </div>
  );
}

export default Checkout;
