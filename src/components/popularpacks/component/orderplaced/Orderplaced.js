import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orderplaced = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="rounded-full p-4 mb-8">
        <div className="w-72 h-72 flex items-center justify-center rounded-full overflow-hidden">
          <img src="https://media.istockphoto.com/id/898295684/vector/shopping-cart-icon-silhouette-2.jpg?s=612x612&w=0&k=20&c=lFMSnfCGyDY_75OSYECSZEII1HR3gJ7lum4br6B3VHQ="/>
        </div>
      </div>
      <h1 className="text-black font-semibold text-center text-xl mb-2">
        Order Placed Successfully
      </h1>
      <p className="text-center text-base text-gray-400 mt-5">Thanks for your order. your order has placed. <br/> successfully.Please continue your order </p>
      <br/> 
      <br/>
      <div className='grid place-content-center mt-32'>
        <button className='h-10 w-72 bg-green-600 text-white font-medium rounded-xl' onClick={()=>document.getElementById('my_modal_2').showModal()}>Continue</button>
        <dialog id="my_modal_2" className="modal">
           <div className="modal-box w-80 h-4/6 bg-green-100">
           <div className="w-64 h-64 flex items-center justify-center rounded-full overflow-hidden border-1.5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiFQ-HUx9zSdpwXH9FApFvrgH80qWl6o3nxzS-LC8bB802g4BrH6B5R8x6A5xMxUJUO4&usqp=CAU"/>
            </div>
              <p className="py-4 mt-3 text-gray-400 text-center text-base leading-8">Hurrah!!! we just deliverred your <br/><span className='text-black'>#15425050</span> order Successfully</p>
              <button className='h-10 w-72 bg-green-600 text-white font-medium rounded-xl mt-4'>Rate the Product</button>
              <button className='h-10 w-72 border-2 border-green-500 bg-transparent text-green-400 font-medium rounded-xl mt-4'onClick={()=>navigate("/dashboard")}>Browse Home</button>
           </div>
          <form method="dialog" className="modal-backdrop">
             <button>close</button>
           </form>
        </dialog>
        <p className='text-center text-green-500 font-semibold mt-4'>Track Order</p>
       </div>
    </div>
  );
}

export default Orderplaced;
