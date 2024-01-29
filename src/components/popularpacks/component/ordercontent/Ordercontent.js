import React from 'react';
import { IoArrowBack} from "react-icons/io5";
import { Link } from 'react-router-dom';

const Ordercontent = () => {
  return (
<div>
<div class="flex place-content-start text-3xl font-semibold fixed top-1 w-full bg-white px-4 z-10 sm:z-20">
    <p class="text-2xl font-bold ml-4"><Link to="/allorder"><IoArrowBack/></Link></p>
    <h3 class="text-base font-semibold text-right pl-10">Order Details</h3>
</div>
     <div className="mt-10 ml-5">
        <h1 className="pl-4 mt-2 font-semibold text-lg">Order ID:30398505202</h1>
    <div className="pr-60">
        <ul className="timeline timeline-vertical">
      <li>
          <div className="timeline-start"><img className='h-12 w-14 rounded-full'src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"/></div>
             <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
         <div className="timeline-end h-18 pt-4"><p>Order Comfrimed</p> <p className="text-sm flex">12/03/2023 <p className="pl-16">01.00.PM</p></p></div>
           <hr className="bg-success"/>
     </li>
      <li>
        <hr  className="bg-success"/>
        <div className="timeline-start"><img  className='h-12 w-14 rounded-full'src="https://img.freepik.com/premium-vector/recycle-sign-green-background-vector-illustration_24908-32319.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/></div>
        <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
        </div>
        <div className="timeline-end h-18 pt-4 "><p>Order Proccessing</p> <p className="text-sm flex">12/03/2023 <p className="pl-16">03.00.PM</p></p></div>
        <hr className="bg-success" />
      </li>
      <li>
        <hr  className="bg-success"/>
        <div className="timeline-start"><img className='h-12 w-14 rounded-full' src="https://img.freepik.com/premium-vector/home-delivey-concept-with-blue-italian-trike-pickup-packages-vector_265571-8.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/></div>
        <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
        </div>
        <div className="timeline-end h-18 pt-4"><p>Order Shipped</p> <p className="text-sm flex ">12/03/2023 <div className=" pl-16"><p className="">05.00.PM</p></div></p></div>
        <hr  className="bg-success"/>
      </li>
      <li>
        <hr  className="bg-success"/>
        <div className="timeline-start"><img className='h-12 w-14 rounded-full' src="https://img.freepik.com/free-vector/cash-delivery-concept_23-2148768275.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"/></div>
        <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 bg-slate-200 rounded-badge">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
        </div>
        <div className="timeline-end h-20 pt-4">
            <p>Order Delivered</p>
             <p className="text-sm flex">12/03/2023
             <p className="pl-16">07.00.PM</p></p></div>
      </li>
    </ul>
    </div>
    <div>
    </div>
     </div>
     <div>
        <h2 className='ml-5 text-lg font-medium' > Product Details</h2>
        <div  className='flex ml-4 mt-2 border-b-2 border-gray-100 justify-evenly'>
           <figure>
              <img className ="h-20 w-20"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPvAxRwVyjy9nLMTFGCPli38QCLiD2NYTVg&usqp=CAU'/>
          </figure>
            <div class="mt-2 px-5">
            <p>Perry's ice Cream </p>
            <p>Banana <span class="pl-28 text-xl font-medium">$13</span></p>
            <p>800gm <span class="pl-28"> 3x</span></p>
            </div>
        </div>
        <div  className='flex ml-4 mt-2 border-b-2 border-gray-100 justify-evenly'>
            <figure>
                <img className ="h-20 w-20"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqACi-VJBmBsUP7tAWtcIa47UtjHaBxzTdGQ&usqp=CAU'/>
            </figure>
            <div class="mt-2 px-5">
            <p>vanilla ice Cream </p>
            <p>Banana <span class="pl-28 text-xl font-medium">$13</span></p>
            <p>800gm <span class="pl-28"> 3x</span></p>
            </div>
        </div>
        <div   className='flex ml-4 mt-2 border-b-2 border-gray-100 justify-evenly'>
            <figure>
                <img className ="h-20 w-20"src='https://www.nutritionadvance.com/wp-content/uploads/2017/05/lamb-meat.jpg'/>
            </figure>
            <div class="mt-2 px-5">
            <p>Meat</p>
             <span class="pl-44 text-xl font-medium text-end">$15</span>
            <p>1kg <span class="pl-36"> 3x</span></p>
            </div>
        </div>
     </div>
     <div className='flex mt-4 ml-4 justify-between'>
      <h2 className='text-lg font-semibold'>Total Amount </h2> <p className=' mr-5 text-lg font-semibold'>$120</p>
     </div>
     <div className='flex mt-4 ml-4 justify-between'>
     <h2 className='text-lg font-semibold'>Paid From </h2><p className=' mr-5 text-lg font-semibold'>Credit Card</p>
     </div>
</div>
  );
}

export default Ordercontent;
