import React from 'react';
import { IoArrowBack} from "react-icons/io5";
import { Link } from 'react-router-dom';

const Voucher = () => {
  return (
     <div>  
         <div class="flex flex-colm">
         <div class="text-3xl font-semibold top-0 w-full z-10 bg-white ml-2 mt-5">
          <p class="justify-start text-2xl font-bold mt-5 ml-4 absolute"><Link to="/profile" ><IoArrowBack/></Link></p>
          <h3 class="text-base mt-5 font-semibold text-center pr-20">Offer And Promos</h3>
        </div>
      </div>
      <div className='mt-4'>
         <h2 className='font-semibold text-lg ml-5'>You have 5 Coupons to Use</h2>
      </div>

      <div className='justify-center px-3 mt-5 '>
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

       <div className='justify-center px-3 mt-5'>
        <div className="card  w-full h-36 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3752.jpg?w=826&t=st=1705567223~exp=1705567823~hmac=9564337fe398b26fec383ced48664cd8f4c46bb68a03f4743146d8f8b5e95ad5')"}} >
      <div className=" border-dashed border-r-2 border-gray-100 w-32 flex ">
        <div className="card-body">
             <h2 className="card-title text-4xl text-white font-semibold "> 23% </h2><p className="text-white pl-4">Off</p>
        </div>
           <div className="content-end pt-5 pl-4 h-24 w-full ">
           <h1 className="text-2xl text-white font-semibold">Lifeboy</h1>
          </div>
       <div className=" w-52 text-green-400">
          <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-9 text-sm font-medium text-green-600">Collect</button>
          <p className="text-base text-white font-medium  w-36 mt-14  text-end">EXP-12/04/2024</p>
         </div>
      </div>
    </div>
       </div>

       <div className='justify-center px-3 mt-5'>
        <div className="card  w-full  h-36 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/free-photo/flat-lay-delicious-ice-cream-with-cookies_23-2149681851.jpg?size=626&ext=jpg&ga=GA1.1.1122649304.1704948345&semt=ais')"}} >
      <div className=" border-dashed border-r-2 border-gray-100 w-32 flex ">
        <div className="card-body">
             <h2 className="card-title text-4xl text-white font-semibold "> 50% </h2><p className="text-white pl-4">Off</p>
        </div>
           <div className="content-end pt-5 pl-4 h-24 w-full ">
           <h1 className="text-2xl text-white font-semibold">Oreo Biscult</h1>
          </div>
       <div className=" w-52 text-green-400">
          <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-9 text-sm font-medium text-green-600">Collect</button>
          <p className="text-base text-white font-medium  w-36 mt-14  text-end">EXP-12/04/2024</p>
         </div>
      </div>
    </div>
       </div>

       <div className='justify-center px-3 mt-5'>
        <div className="card  w-full  h-36 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/free-photo/flat-lay-fish-with-lemon-copy-space_23-2148643639.jpg?size=626&ext=jpg&ga=GA1.1.1122649304.1704948345&semt=ais')"}} >
      <div className=" border-dashed border-r-2 border-gray-100 w-32 flex ">
        <div className="card-body">
             <h2 className="card-title text-4xl text-white font-semibold "> 18% </h2><p className="text-white pl-4">Off</p>
        </div>
           <div className="content-end pt-5 pl-4 h-24 w-full ">
           <h1 className="text-2xl text-white font-semibold">Tuna Fish</h1>
          </div>
       <div className=" w-52 text-green-400">
          <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-14 text-sm font-medium text-green-600">Collect</button>
          <p className="text-base text-white font-medium  w-36 mt-14  text-end">EXP-12/04/2024</p>
         </div>
      </div>
    </div>
       </div>

 </div>
  );
}

export default Voucher;
