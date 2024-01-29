import React from 'react';
import { Link } from 'react-router-dom';

const All = () => {
  return (
  <div>
    <div className='mt-2'>
    <div className="flex flex-col w-full border-opacity-50">
    <div className="grid flex-grow h-36 card bg-slate-100 rounded-box hover:bg-zinc-200 cursor-pointer">
       <div className='flex  mt-2'><p className="text-md text-left text-gray-500 ml-5">Order ID:</p><p class="font-medium">2324252627</p><span class="pl-36 text-gray-400">25 Nov</span></div>
       <div><p className='absolute pt-4 ml-3 text-gray-500'>Status</p></div>
        <ul className="steps px-5 ml-5"> 
          <li className="step step-primary"><p className='text-violet-800 text-base font-medium'><Link to="/ordercontent">Confirmed</Link></p></li>
           <li className="step"></li>
           <li className="step"></li>
           <li className="step"></li>
        </ul>
        </div>
        </div>
      </div>
      <div className='mt-2'>
    <div className="flex flex-col w-full border-opacity-50">
    <div className="grid flex-grow h-36 card bg-slate-100 rounded-box  hover:bg-zinc-100 cursor-pointer">
       <div className='flex mt-2'><p className="text-md text-left text-gray-400 ml-5">Order ID:</p><p>2324252627</p><span class="pl-36 text-gray-400">25 Nov</span></div>
       <div><p className='absolute pt-4 ml-3 text-gray-400'>Status</p></div>
        <ul className="steps px-5 ml-5"> 
           <li className="step step-success"></li>
           <li className="step step-success"><p className='text-green-500 text-base font-medium'><Link to="/ordercontent">Processing</Link></p></li>
           <li className="step"></li>
           <li className="step"></li>
        </ul>
        </div>
        </div>
      </div>
      <div className='mt-3'>
    <div className="flex flex-col w-full border-opacity-50">
    <div className="grid flex-grow h-36 card bg-slate-100 rounded-box  hover:bg-white cursor-pointer">
       <div className='flex  mt-2'><p className="text-md text-left text-gray-400 ml-5">Order ID:</p><p>2324252627</p><span class="pl-36 text-gray-400">25 Nov</span></div>
       <div><p className='absolute pt-4 ml-3 text-gray-400'>Status</p></div>
        <ul className="steps px-5 ml-5"> 
          <li className="step step-warning"></li>
           <li className="step step-warning"></li>
           <li className="step step-warning"> <p className='text-yellow-500 text-base font-medium'><Link to="/ordercontent">Shipped</Link></p></li>
           <li className="step"></li>
        </ul>
        </div>
        </div>
      </div>
      <div className='mt-3'>
    <div className="flex flex-col w-full border-opacity-50">
    <div className="grid flex-grow h-36 card bg-slate-100 rounded-box  hover:bg-white cursor-pointer">
       <div className='flex mt-2'><p className="text-md text-left text-gray-400 ml-5">Order ID:</p><p>2324252627</p><span class="pl-36 text-gray-400">25 Nov</span></div>
       <div><p className='absolute pt-4 ml-3 text-gray-400'>Status</p></div>
        <ul className="steps px-5 ml-5"> 
          <li className="step step-success"></li>
           <li className="step step-success"></li>
           <li className="step step-success"></li>
           <li className="step step-success"><p className='text-green-600 text-base font-medium'><Link to="/ordercontent">Delivery</Link></p></li>
        </ul>
        </div>
        </div>
      </div>
      <div className='mt-3'>
    <div className="flex flex-col w-full border-opacity-50">
    <div className="grid flex-grow h-36 card bg-slate-100 rounded-box  hover:bg-white cursor-pointer">
       <div className='flex mt-2'><p className="text-md text-left text-gray-400 ml-5">Order ID:</p><p>2324252627</p><span class="pl-36 text-gray-400">25 Nov</span></div>
       <div><p className='absolute pt-4 ml-3 text-gray-400'>Status</p></div>
        <ul className="steps px-5 ml-5"> 
           <li className="step step-error"></li>
           <li className="step step-error"></li>
           <li className="step step-error"></li>
           <li className="step step-error"><p className='text-red-600 text-base font-medium'> <Link to="/ordercontent">Cancelled</Link></p></li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default All;
