import React from 'react';
import { IoArrowBack} from "react-icons/io5";
import { Link } from 'react-router-dom';

const Offerdetails = () => {
  return (
    <div>
        <div class="flex flex-colm">
         <div class="text-3xl font-semibold top-0 w-full z-10 bg-white ml-2 mt-5">
          <p class="justify-start text-2xl font-bold mt-5 ml-4 absolute"><Link to="/voucher" ><IoArrowBack/></Link></p>
          <h3 class="text-base mt-5 font-semibold text-center pr-20">Offer Details Page</h3>
        </div>
      </div>
          
      <div className='justify-center px-3 mt-8'>
        <div className="card  w-full h-36 bg-base-100 shadow-xl  "style={{ backgroundImage:"url('https://img.freepik.com/free-vector/dark-blue-abstract-background_1378-176.jpg?size=626&ext=jpg&ga=GA1.1.1122649304.1704948345&semt=ais')"}} >
      <div className=" border-dashed border-r-2 border-gray-100 w-32 flex ">
        <div className="card-body">
           <Link to='/offerdetails'><h2 className="card-title text-4xl text-white font-semibold "> 41% </h2><p className="text-white pl-4">Off</p></Link>
        </div>
           <div className="content-end pt-5 pl-4 h-24 w-full ">
           <h1 className="text-2xl text-white font-semibold">Black Coffee</h1>
          </div>
       <div className=" w-52 text-green-400">
          <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-10 text-sm font-medium text-green-600">Collect</button>
          <p className="text-base text-white font-medium  w-36 mt-14  text-end">EXP-12/04/2024</p>
         </div>
      </div>
    </div>
       </div>

       <div className='mt-5'>
          <p class="text-center font-normal text-base">41% off only for you .To get this discount collect and apply the voucher.</p>
       </div>
       <div className='text-gray-500 mt-12'>
        <ul className='ml-4 px-4'>
            <li className='pb-4 '><button className='h-1.5 w-4  bg-green-600 rounded-sm gap-y-1.5'></button>Redeemeable At All Surlphurfree Bura And Black Coffee</li>
            <li className='pb-4'> <button className='h-1.5 w-4 bg-green-600 rounded-sm'></button>Not Valid With Any Other Discount And Promotion</li>
            <li className='pb-4'> <button className='h-1.5 w-4 bg-green-600 rounded-sm'></button>Valid For Sulphurfree, Coffee ,And Tea Only </li>
            <li className='pb-4'> <button className='h-1.5 w-4 bg-green-600 rounded-sm'></button>No Cash Value</li>
       </ul>
       </div>
       <div className='mt-5 ml-5 text-left'><h4>Exp 12/12/2024</h4></div>

       <div className='grid place-content-center mt-32'>
        <button className='h-12 w-72 bg-green-600 text-white font-medium rounded-xl'>Redeem Now</button>
        <p className='text-center mt-2'>Terms and Condations</p>
       </div>
    </div>
  );
}

export default Offerdetails;
